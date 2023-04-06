import { createApp } from 'vue'
import App from './App.vue'

import './style.scss'

// importing bootstrap

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

// importing fontawesome core

import { library } from '@fortawesome/fontawesome-svg-core'


// importing fontawesome icon component

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// importing a specific icon from fontawesome
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

document.title = "My weather app"

createApp(App)
.component('fa', FontAwesomeIcon)
.use(bootstrap)
.mount('#app')
