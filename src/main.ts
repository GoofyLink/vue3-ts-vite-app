import { createApp } from 'vue';
import 'vant/lib/index.css'
import './assets/css/style.css';
import App from './App.vue';
import router from './router';
import pinia from './store';
import {Button,NavBar,Tabbar,TabbarItem,Checkbox,Toast,Icon} from 'vant'
import './utils/rem'
const app = createApp(App)

app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Checkbox)
app.use(Toast)
app.use(Icon)

app.use(pinia)
app.use(router)
app.mount("#app")