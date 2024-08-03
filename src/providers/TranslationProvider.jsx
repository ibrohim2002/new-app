import React, { useEffect } from "react";

const GTranslateFireEvent = (element, eventName) => {
  const event = new Event(eventName, { bubbles: true });
  element.dispatchEvent(event);
};

export function translate(lng) {
  const sel = document.querySelector(".goog-te-combo");

  if (!sel) {
    translate(lng);
  } else {
    sel.value = lng;

    GTranslateFireEvent(sel, "change");
  }
}

export default function TranslationProvider({ children }) {
  useEffect(() => {
    setTimeout(() => {
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "ru" },
          "google_translate_element"
        );
      };

      const addTranslateScript = () => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onload = googleTranslateElementInit;
        document.body.appendChild(script);
      };

      if (!window.google || !window.google.translate) {
        addTranslateScript();
      } else {
        googleTranslateElementInit();
      }
    }, 100);
  }, []);

  return (
    <div>
      {children}
      <div id="google_translate_element"></div>
    </div>
  );
}
