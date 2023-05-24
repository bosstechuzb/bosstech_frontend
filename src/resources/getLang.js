import { useContext, useEffect } from "react";
import { LangContext } from "./../context/lang/index";

function GetLang() {
  const [language, setLanguage] = useContext(LangContext);

  useEffect(() => {
    let lang = localStorage.getItem("lang") || "en";
    document.documentElement.lang = lang;
    setLanguage(lang);
  }, [language]);
}

export default GetLang;
