'use client'
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
export default function Footer(){
  const { t } = useI18n();
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-limit py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div>
          <div className="font-semibold">{t.brand}</div>
          <div className="small">© {new Date().getFullYear()} {t.brand}. {t.footer.copyright}</div>
        </div>
        <div className="flex gap-6 small">
          {t.footer.links.map(([href,label],i)=>(<Link key={i} className="link" href={href}>{label}</Link>))}
        </div>
      </div>
    </footer>
  );
}
