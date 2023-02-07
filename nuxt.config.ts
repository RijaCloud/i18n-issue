// https://v3.nuxtjs.org/api/configuration/nuxt.config
import fr from './locales/fr.json';

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: {
      legacy: false,
      // locale: 'fr',
      messages: {
        fr,
      },
      fallbackLocale: ['fr'],
      silentTranslationWarn: true,
    },
  },
});
