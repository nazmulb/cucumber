/**
 * URL Related Methods
 */
class URL {

    /**
     * Is it Friday
     * @param  String environment
     * @return String root url
     */
    getAppUrlForEnv(env) {
        switch (env.toLowerCase()) {
        case 'local':
            return "http://localhost:8000";
        case 'prod':
            return "https://nazmulb.wordpress.com";
        default:
            return "https://nazmulb.wordpress.com";
        }
    }
}

module.exports = URL;