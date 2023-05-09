import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"; 

import { createPinia } from 'pinia' 

import './assets/styles.scss';
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css"; 
import "primevue/resources/primevue.min.css";

import Button from 'primevue/button';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import Column from 'primevue/column';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import DataTable from 'primevue/datatable';

import StyleClass from 'primevue/styleclass';

const pinia = createPinia()

const app= createApp(App)
 
app.use(router)
app.use(pinia) 
app.use(PrimeVue, { ripple: true });

app.component('Button', Button);

app.component('Card', Card);
app.component('Chart', Chart);
app.component('Column', Column);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('DataTable', DataTable);

app.directive('styleclass', StyleClass);

app.mount('#app')