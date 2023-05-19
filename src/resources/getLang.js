import { useEffect } from "react";

function GetLang() {
  useEffect(() => {
    let lang = localStorage.getItem("lang") || "en";
    document.documentElement.lang = lang;
  }, []);
}

export default GetLang;
