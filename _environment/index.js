export default {
    DEV: 'development',
    STG: 'staging',
    PRD: 'production',
    getEnvironment() {
        return this.DEV;
    },
};
