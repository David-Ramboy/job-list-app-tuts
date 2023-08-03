<template>
    <main>
        <div id="authId"></div>
    </main>
</template>

<script lang="ts">
import * as React from "react";
import * as ReactDOM from "react-dom";
import SuperTokensReactComponent from "../components/Supertokens";
import { defineComponent } from 'vue';
export default defineComponent({
    mounted(){
        ReactDOM.render(
            React.createElement(SuperTokensReactComponent as React.FC),
            document.getElementById("authId")
        );
    },
});
</script>

