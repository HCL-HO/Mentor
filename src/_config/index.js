import env from "_environment";
import language from "./language";

const Global = {
    [env.DEV]: {},
    [env.STG]: {},
    [env.PRD]: {}
};

const CURRENT_ENVIRONMENT = env.getEnvironment();

export default {
    Global: Global[CURRENT_ENVIRONMENT],
    Language: language[CURRENT_ENVIRONMENT]
};
