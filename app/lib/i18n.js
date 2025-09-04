'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from './content/en.json'; import es from './content/es.json';
const dict={en,es};
const LangContext=createContext({lang:'en',t:en,setLang:()=>{}});
export function LanguageProvider({children}){
  const [lang,setLang]=useState('en');
  useEffect(()=>{ const s=typeof window!=='undefined'&&localStorage.getItem('pch_lang'); if(s==='en'||s==='es') setLang(s); },[]);
  useEffect(()=>{ if(typeof window!=='undefined') localStorage.setItem('pch_lang', lang); },[lang]);
  const value=useMemo(()=>({lang,setLang,t:dict[lang]}),[lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
export function useI18n(){ return useContext(LangContext); }
