Frameworks: 
    - React JS
    - i18N
    - Babel

i18N

This library helps with the internationalization of the website. It will change the language depending on the browser language and will get the strings from local files.

For easier management of the translations I have installed the library i18next-http-backend. With this, we just need to follow this steps:

    1. Install the library.

        `npm install i18next-http-backend`

    2. Import to the cofing file of i18N.

        ```
        import i18next from 'i18next';
        import Backend from 'i18next-http-backend';
        
        i18next.use(Backend).init(i18nextOptions);
        ```

    3. Create translation files.
        ```
        public
            /_locales
                /_en
                    /_ translation.json
                /_es
                    /_ translation.json
                ...
        ```

Nice to read

i18n -> https://codetain.com/blog/how-to-translate-react-application-with-react-i18next-part-2

