document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage;
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    const isRtl = rtlLanguages.some(lang => userLang.startsWith(lang));

    const dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
});


