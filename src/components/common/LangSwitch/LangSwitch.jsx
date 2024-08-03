import { translate } from "../../../providers/TranslationProvider";
import "./styles.css";

export default function LangSwitch() {
  return (
    <div className="notranslate lang-switch">
      <span className="lang-switch-span" onClick={() => translate("ru")}>
        ru
      </span>
      |
      <span className="lang-switch-span" onClick={() => translate("uz")}>
        uz
      </span>
      |
      <span className="lang-switch-span" onClick={() => translate("tr")}>
        tr
      </span>
    </div>
  );
}
