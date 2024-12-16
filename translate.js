function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'ja', 
        includedLanguages: 'ja,en', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
