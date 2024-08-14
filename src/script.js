document.addEventListener('DOMContentLoaded', () => {
    // Bestimmt die bevorzugte Sprache des Benutzers anhand der Einstellungen des Browsers.
    const userLang = navigator.language || navigator.userLanguage;

    // Eine Liste von Sprachcodes, die in RTL (Right-To-Left) geschrieben werden.
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

    // Überprüft, ob die vom Benutzer bevorzugte Sprache zu den RTL-Sprachen gehört.
    // some() durchläuft das Array und prüft, ob mindestens ein Sprachcode mit dem Benutzer-Sprachcode beginnt.
    const isRtl = rtlLanguages.some(lang => userLang.startsWith(lang));

    // Legt die Textausrichtung fest, abhängig davon, ob die Sprache eine RTL-Sprache ist.
    // 'rtl' (right-to-left) für RTL-Sprachen, 'ltr' (left-to-right) für alle anderen Sprachen.
    const dir = isRtl ? 'rtl' : 'ltr';

    // Setzt das 'dir'-Attribut des HTML-Dokuments entsprechend der ermittelten Textausrichtung.
    document.documentElement.setAttribute('dir', dir);
});


