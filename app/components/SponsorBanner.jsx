'use client'
import Image from 'next/image'; import { useEffect, useState } from 'react'; import { useI18n } from '../lib/i18n';
const defaults=['/logo.svg','/logo.svg','/logo.svg','/logo.svg'];
export default function SponsorBanner(){
  const { t } = useI18n();
  const [banners,setBanners]=useState(defaults);
  useEffect(()=>{
    if (process.env.NEXT_PUBLIC_SPONSOR_BANNERS) {
      const arr = process.env.NEXT_PUBLIC_SPONSOR_BANNERS.split(',').map(s=>s.trim()).filter(Boolean);
      if (arr.length>0) setBanners(arr);
    }
  },[]);
  return (
    <section id="sponsors" className="container-limit py-12">
      <h3 className="text-xl font-semibold mb-4">{t.sections.sponsors_title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {banners.map((src,i)=>(
          <div className="card p-4 flex items-center justify-center" key={i}>
            <Image src={src} alt={`Sponsor ${i+1}`} width={160} height={80} />
          </div>
        ))}
      </div>
    </section>
  );
}
