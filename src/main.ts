import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import * as SuperTokens from "supertokens-auth-react";
import * as Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import router from "./router";


SuperTokens.init({
    appInfo: {
        appName: "job app",
        apiDomain: "http://localhost:8000",
        websiteDomain: "http://localhost:8080",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        Passwordless.init({
            contactMethod: "EMAIL"
        }),
        Session.init(),
    ],
});

createApp(App).use(router).mount('#app')
