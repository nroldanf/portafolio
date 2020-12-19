import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VLayout,
  },
})

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#ed553b',
        accent: '#ed553b',
      },
    },
  },
})
