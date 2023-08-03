import * as SuperTokens from "supertokens-auth-react";
import { canHandleRoute, getRoutingComponent } from "supertokens-auth-react/ui";
import { PasswordlessPreBuiltUI } from "supertokens-auth-react/recipe/passwordless/prebuiltui";

function SuperTokensReactComponent(props: any) {
    if (canHandleRoute([PasswordlessPreBuiltUI])) {
        return getRoutingComponent([PasswordlessPreBuiltUI]);
    }
    return "Route not found";
}

export default SuperTokensReactComponent;