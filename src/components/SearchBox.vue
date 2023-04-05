<template>
    <div class="search_box">
        <input type="text" v-model="query" class="form-control text-white" placeholder="Search..." />
    </div>
</template>

<script>

    export default {
        name: "InputComponent",

        methods: {
            created() {
                this.$emit('fetchWeather');
            }
        },

        props: {
            searchQuery: String
        }
    }
</script>