// export const  switchMode = (mode: string , ctx: any): void => {
//       // set the mode to anti mode for switch
//       // set the anti mode to clone constant
//       // and finally set the mode on localestorage to remember use prefrences
//       ctx.mode = mode;
//       localStorage.setItem("mode", ctx.mode);
// }

// export const setDefaultMode =() =>  {
//     // get the mode from localstorage
//     const mode = localStorage.getItem("mode");
//     // simply return nothing if mode is not exist
//     if (!mode) {
//       return;
//     }
//     // set our mode and anti mode variables
//     this.switchMode(mode);
//   },
export const switchLanguage = (locale: string, ctx: any) => {
  localStorage.setItem("locale", locale);
  ctx.$vuetify.rtl = locale === "ar";
  ctx.$vuetify.lang.current = locale;
  ctx.$i18n.locale = locale;
};

export const switchMode = (mode: string, ctx: any) => {
  localStorage.setItem("mode", mode);
  ctx.$vuetify.theme.dark = mode === "dark";
};

//   export const  checkLoggedIn = ctx => {
//     ctx.$auth.loggedIn ? '' : ctx.$router.push('/login')
//   }

//   export const initApp = ctx => new Promise((resolve) => {
//     //set default store "temp"
//     localStorage.getItem('store') ? '' : localStorage.setItem('store' , 1)
//     // handle default  language
//     const locale = localStorage.getItem('locale') || 'ar'
//     switchLanguage(locale, ctx)

//     // handle default  theme
//     const mode = localStorage.getItem('mode')
//     // check if mode is set to make the change
//     if (mode) {
//       ctx.$vuetify.theme.dark = mode !== 'light'
//     }

//     // check logged in
//     checkLoggedIn(ctx)
//     setTimeout(() => {
//       ctx.$store.commit('ui/appLoaded')
//     }, 2000);

//     resolve(true)
//   })

//   export const serializeQuery = query => {
//     return Object.keys(query)
//       .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
//       .join('&');
//   }
//   export const addParamsToLocation = (params, path) => {
//     return new Promise(resolve => {
//       history.pushState(
//         {},
//         null,
//         path +
//         '?' +
//         Object.keys(clearNullValues(params))
//           .map(key => {
//             return (
//               encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
//             )
//           })
//           .join('&')
//       )
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       resolve(true)
//     })
//   }
//   export const clearNullValues = arr => {
//     const clone = { ...arr }
//     Object.keys(clone).forEach(key => {
//       clone[key] === null || '' ? delete clone[key] : ''
//     })
//     return clone
//   }
//   export const removeFromArrayByVal = (item, array) => {
//     let index = array.indexOf(item);
//     if (index !== -1) {
//       array.splice(index, 1);
//     }

//     return array
//   }

//   export const slugify = title => {
//     return title
//   }
