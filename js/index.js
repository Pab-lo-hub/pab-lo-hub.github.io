const { createApp } = Vue;
const url =  'https://randomuser.me/api/';
  createApp({
    data() {
      return {
        name: "",
        email: "",
        image: "",
        location: "",
        cell: "",
      }
    },
    mounted() {
      axios
              .get(url)
              .then(response => {
              this.results = response.data
              let persona = this.results.results[0];
              this.name = persona.name.first + " " + persona.name.last;
              this.email = persona.email;
              this.image = persona.picture.large;
              this.location = persona.location.city + ", " + persona.location.state + ", " + persona.location.ountry;
              this.cell = persona.cell;
              })
              .catch ( function (error){
                console.log('ERROR API CALL');
              });
    }
  }).mount('#app')
