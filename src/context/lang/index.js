import { createContext, useState } from "react";

export const LangContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

  return (
    <LangContext.Provider value={[language, setLanguage]}>
      {children}
    </LangContext.Provider>
  );
};

export default LanguageProvider;
