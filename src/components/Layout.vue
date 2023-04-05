<template>
  <div class="weather_app_container p-5">
    <InputComponent @fetchWeather="getWeatherData" />
    <WeatherComponentForAddress />
  </div>
</template>

<script>
  import InputComponent from './SearchBox.vue'
  import WeatherComponentForAddress from './WeatherDetails.vue'

  export default {
    name: 'LayoutComponent',
    components: {
      InputComponent,
      WeatherComponentForAddress
    },

      
    data() {
      return {
        apiKey: 'f307cf50184c04440b073f38f34ae706',
        baseUrl: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weather: {}
      }
    },

    methods: {
      getWeatherData(e) {
        if(e.key === 'Enter') {
          fetch(`${this.baseUrl}weather?q=${this.query}&units=metric&APPID=${this.apiKey}`)
          .then(res => {
            return res.json();
          }).then(this.setResult);
        }
      },

      setResult(results) {
        this.weather = results;
      }
    }
  }
</script>