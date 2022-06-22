import { createI18n } from "vue-i18n";
import enLang from "../locales/en.json";
import zhLang from "../locales/zh.json";
export const I18N = createI18n({
  locale: "en",
  messages: {
    en: enLang,
    zh: zhLang,
  },
});
