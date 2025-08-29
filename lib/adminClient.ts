
import { prisma } from './db';

export async function listListings(){
  return prisma.provider.findMany({
    include:{ regions:true, services:{ include:{ service:true } } },
    take:100, orderBy:[{updatedAt:'desc'}]
  });
}

export async function listUsers(){
  return prisma.user.findMany({ take:100, orderBy:[{createdAt:'desc'}] });
}

export async function listReviews(providerId?:string){
  return prisma.review.findMany({
    where: providerId? { providerId } : undefined,
    include:{ author:true },
    orderBy:[{ createdAt:'desc' }]
  });
}

export async function createReview(input:{providerId:string;authorEmail:string;rating:number;comment?:string;eventDate?:string;}){
  const author = (await prisma.user.findUnique({ where:{ email: input.authorEmail } })) ||
                 (await prisma.user.create({ data:{ email: input.authorEmail, role:'CLIENT' as any } }));
  const review = await prisma.review.create({
    data:{ providerId: input.providerId, authorId: author.id, rating: input.rating, comment: input.comment, eventDate: input.eventDate? new Date(input.eventDate): undefined }
  });
  const agg = await prisma.review.aggregate({ where:{ providerId: input.providerId }, _avg:{ rating:true }, _count:{ rating:true } });
  await prisma.provider.update({ where:{ id: input.providerId }, data:{ ratingAvg: agg._avg.rating||0, ratingCount: agg._count.rating||0 } });
  return review;
}
