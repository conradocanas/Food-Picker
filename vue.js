const app = new Vue({
    el: '#app',
    opts: {
      theme: {
          dark: false
      }
    },
    vuetify: new Vuetify(this.opts),
    data: () => ({
        titulo: 'Food Picker - App',
        goDark: true
    }),
    methods: {
    },
    computed: {
      setTheme() {
        if (this.goDark == true) {
            return (this.$vuetify.theme.dark = true);
        } else {
            return (this.$vuetify.theme.dark = false);
        }
      },
    },
    mounted () {
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(response => {
          this.items = response.data.drinks
          this.keys = Object.keys(response.data.drinks[0])
          console.log(items)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    },
})