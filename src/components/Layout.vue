<template>
  <div class="weather_app_container p-5">
    <h3 class="mb-4 text-center text-white">My Weather App</h3>

    <div class="search_box">
      <input type="text" v-model="query" v-on:keypress="getWeatherData" class="form-control text-white" placeholder="Search..." />
    </div>

    <div class="mt-2 text-center" v-if="typeof weather.main != 'undefined'">
      <h4 class="text-white weather_address">
        {{ weather.name }}, {{ weather.sys.country }} 
      </h4>

      <div class="d-flex text-white justify-content-center  w-100">
        <div class="main_temp">
          <div class="p-4">
            <fa icon="cloud" class="icon" />
            <!-- <i class="fas fa-cloud icon"></i> -->

            <h1>{{ Math.round(weather.main.temp) }} ℃</h1>

            <h5>{{ weather.weather[0].description }}</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 text-center text-white" v-if="typeof weather.main === 'undefined'">
      <h4 class="fw-bold mt-4">No weather data to show</h4>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'LayoutComponent',

      
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
        if(e.key == 'Enter') {
          fetch(`${this.baseUrl}weather?q=${this.query}&units=metric&APPID=${this.apiKey}`)
          .then(res => {
            return res.json();
          }).then(this.setResult);
        }
      },

      setResult(results) {
        this.weather = results;

        console.log(results)
      }
    }
  }
</script>