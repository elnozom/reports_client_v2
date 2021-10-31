export const switchLanguage = (locale: string, ctx: any) => {
  localStorage.setItem("locale", locale);
  ctx.$vuetify.rtl = locale === "ar";
  ctx.$vuetify.lang.current = locale;
  ctx.$i18n.locale = locale;
};

export const numberWithCommas = (x: number) => {
    const xFixed = x.toFixed(3)
    return xFixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const currency = (x:number):string => {
  return `${numberWithCommas(x)} EGP`
}

export const switchMode = (mode: string, ctx: any) => {
  localStorage.setItem("mode", mode);
  ctx.$vuetify.theme.dark = mode === "dark";
};
