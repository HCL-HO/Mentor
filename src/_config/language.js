import env from '_environment';

export default {
    [env.DEV]: {
        /**
         * App Default Language
         * @param (string) system - Dependance on system's default
         * @param (string) en / zh-Hant / etc... - One of supports
         */
        default: 'system', // "system", "en", "zh-Hant"

        supports: {
            en: {
                // A name which display on Language Settings
                alias: 'English',

                /**
                 * Action when user enter Language Settings
                 * @param (boolean) true - Display
                 * @param (boolean) false - Hidden
                 */
                enabled: true,
            },
            'zh-Hant': {
                alias: '繁體中文',
                enabled: true,
            },
            'zh-Hans': {
                alias: '简体中文',
                enabled: false,
            },
        },
    },
    [env.STG]: {
        /**
         * App Default Language
         * @param (string) system - Dependance on system's default
         * @param (string) en / zh-Hant / etc... - One of supports
         */
        default: 'system', // "system", "en", "zh-Hant"

        supports: {
            en: {
                // A name which display on Language Settings
                alias: 'English',

                /**
                 * Action when user enter Language Settings
                 * @param (boolean) true - Display
                 * @param (boolean) false - Hidden
                 */
                enabled: true,
            },
            'zh-Hant': {
                alias: '繁體中文',
                enabled: true,
            },
            'zh-Hans': {
                alias: '简体中文',
                enabled: false,
            },
        },
    },
    [env.PRD]: {
        /**
         * App Default Language
         * @param (string) system - Dependance on system's default
         * @param (string) en / zh-Hant / etc... - One of supports
         */
        default: 'system', // "system", "en", "zh-Hant"

        supports: {
            en: {
                // A name which display on Language Settings
                alias: 'English',

                /**
                 * Action when user enter Language Settings
                 * @param (boolean) true - Display
                 * @param (boolean) false - Hidden
                 */
                enabled: true,
            },
            'zh-Hant': {
                alias: '繁體中文',
                enabled: true,
            },
            'zh-Hans': {
                alias: '简体中文',
                enabled: false,
            },
        },
    },
};
