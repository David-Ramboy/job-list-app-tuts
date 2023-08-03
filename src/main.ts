import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import * as SuperTokens from "supertokens-auth-react";
import * as Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import router from "./router";

createApp(App).use(router).mount('#app')

SuperTokens.init({
    appInfo: {
        appName: "job app",
        apiDomain: "mongodb://127.0.0.1:27017",
        websiteDomain: "localhost://localhost:8080/",
        apiBasePath: "/",
        websiteBasePath: "/"
    },
    recipeList: [
        Passwordless.init({
            contactMethod: "EMAIL"
        }),
        Session.init(),
    ],
});