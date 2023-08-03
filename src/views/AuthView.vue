<script lang="ts">
import * as React from "react";
import * as ReactDOM from "react-dom";
import SuperTokensReactComponent from "../components/Supertokens";
export default {
    mounted: () => {
        ReactDOM.render(
            React.createElement(SuperTokensReactComponent as React.FC),
            document.getElementById("authId")
        );
    },
};
</script>

<template>
    <main>
        <div id="authId"></div>
    </main>
</template>