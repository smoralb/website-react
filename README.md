Frameworks: 
    - React JS
    - i18N

#i18N

This library helps with the internationalization of the website. It will change the language depending on the browser language and will get the strings from local files.

For easier management of the translations I have installed the library i18next-http-backend. With this, we just need to follow this steps:

    1. ##Install the library.

        npm install i18next-http-backend

    2. ##Import to the cofig file of i18N.

        import i18n from "i18next";
        import { initReactI18next } from "react-i18next"
        import Backend from 'i18next-http-backend';
        import LanguageDetector from 'i18next-browser-languagedetector';

        const DETECTION_OPTIONS = {
            order: ['navigator']
        };
        
        i18n
        .use(Backend) -> **Easier access to translations.**
        .use(initReactI18next) **-> Initialize i18next library.**
        .use(LanguageDetector) **-> Use LanguageDetector to detect user's browser language.**
        .init({
            detection: DETECTION_OPTIONS, **-> To set setection of the web browser**
            fallbackLng: "en", **-> Use english as a default language if it is not possible to detect another one.**
            // keySeparator: false, **-> To define the separator that will be used in your translations. If flat JSON, set as false.**
            react: {
                useSuspense: false -> Lazy load of strings
            }
        });

    3. ##Create translation files.

        public
            /locales
                /en
                    translation.json
                /es
                    translation.json
                ...

    4. ##Access to translations from js files

        import { useTranslation } from 'react-i18next';

        export default function App() {
            const { t, i18n } = useTranslation();

            return (
                <body>
                    <div className="App"/>
                    <SectionHeader/>
                    <SectionItem title = {t("studies_degree_title")} college = {t("studies_degree_college")}
                </body>
            )
        }

#Links:

i18n -> https://codetain.com/blog/how-to-translate-react-application-with-react-i18next-part-2

