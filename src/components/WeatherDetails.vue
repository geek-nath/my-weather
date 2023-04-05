<template>
    <div class="mt-2 text-center">
        <h4 class="text-white weather_address">
            City, Country
        </h4>

        <TempComponent />
    </div>
</template>

<script>
    import TempComponent from './TempDetail.vue'

    export default {
        name: 'WeatherComponentForAddress',

        components: {
            TempComponent
        }
    }
</script>