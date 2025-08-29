import Link from 'next/link';
export default function Layout({children, lang}:{children:React.ReactNode, lang:'en'|'es'}){
  return (<div className="container">
    <header className="header">
      <Link href="/" className="brand"><span className="dot" /> <img src="/logo.svg" alt="logo" height={24} /></Link>
      <div className="header-right"><Link href={lang==='en'? '/?lang=es':'/?lang=en'} className="lang">{lang==='en'?'Español':'English'}</Link></div>
    </header>
    {children}
    <footer className="footer">© {new Date().getFullYear()} ProConnectHub / MiContacto</footer>
  </div>)
}
