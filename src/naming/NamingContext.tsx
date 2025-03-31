/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from 'react';
import pt from './pt.json';
import en from './en.json';
import es from './es.json';
import de from './de.json';

const languages = { pt, en, es, de };
type Lang = 'pt' | 'en' | 'es' | 'de';

type Translations = {
  fields: Record<string, string>;
  messages: Record<string, string>;
  infos?: Record<string, string>;
};

interface NamingContextData {
  lang: Lang;
  setLang: (lang: Lang) => void;
  getField: (key: string) => string;
  getMessage: (key: string) => string;
  getInfo: (key: string) => string;
}

const NamingContext = createContext({} as NamingContextData);

export function useNaming() {
  return useContext(NamingContext);
}

interface NamingProviderProps {
  children: ReactNode;
}

export function NamingProvider({ children }: NamingProviderProps) {
  const [lang, setLang] = useState<Lang>('pt');
  const current: Translations = languages[lang];

  const getField = (key: keyof typeof current.fields) => current.fields[key] ?? key;
  const getMessage = (key: string) => current.messages?.[key] ?? key;
  const getInfo = (key: string) => current.infos?.[key] ?? key;

  return (
    <NamingContext.Provider value={{ lang, setLang, getField, getMessage, getInfo }}>
      {children}
    </NamingContext.Provider>
  );
}
