import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI/'
import directives from "@/components/directives";
import router from "@/router/router"
import store from "@/store";

const app = createApp(App)

Array.from(components).forEach(component => {
	app.component(component.name, component)
})

directives.forEach(directive => {
	app.directive(directive.name, directive)
})

app.use(router)
app.use(store)
app.mount('#app')
