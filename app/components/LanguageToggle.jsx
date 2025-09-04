'use client'
import { useI18n } from '../lib/i18n';
export default function LanguageToggle(){
  const { lang, setLang } = useI18n();
  return (
    <div className="card flex items-center gap-1 p-1">
      <button onClick={()=>setLang('en')} className={`px-2 py-1 rounded-lg ${lang==='en'?'bg-white text-black':'text-white/80'}`}>🇺🇸</button>
      <button onClick={()=>setLang('es')} className={`px-2 py-1 rounded-lg ${lang==='es'?'bg-white text-black':'text-white/80'}`}>🇪🇸</button>
    </div>
  );
}
