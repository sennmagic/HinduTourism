// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Translate script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement(
                    {
                      pageLanguage: 'en',
                      includedLanguages: 'en,hi', // Add more languages if needed
                      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                      autoDisplay: false
                    },
                    'google_translate_element'
                  );
                }
              `,
            }}
          />
          <script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            type="text/javascript"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
