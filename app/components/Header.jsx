'use client'
import Image from 'next/image'; import Link from 'next/link'; import { useI18n } from '../lib/i18n'; import LanguageToggle from './LanguageToggle';
export default function Header(){
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-20 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="container-limit flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="ProConnectHub" width={36} height={36} />
          <span className="font-semibold">{t.brand}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 small">
          <Link href="#categories" className="hover:opacity-100 opacity-80">Categories</Link>
          <Link href="#features" className="hover:opacity-100 opacity-80">Features</Link>
          <Link href="#lead" className="hover:opacity-100 opacity-80">Get Leads</Link>
          <Link href="#sponsors" className="hover:opacity-100 opacity-80">Sponsors</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link href="#lead" className="btn btn-primary">{t.cta_secondary}</Link>
        </div>
      </div>
    </header>
  );
}
