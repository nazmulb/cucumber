const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const reporter = require('cucumber-html-reporter');

/**
 * Report Related Methods
 */
class Report {

    /**
     * Instantiate the object
     * @param {World} world - world object instance
     */
    constructor(world) {
        this.world = world;
        this.reportPath = path.join("reports");

        if(this.world.debug) console.log('Report:constructor');
        
        this.ensureDirectoryExists();
    }

    /**
     * Ensure directory exists or not; if not then it will create new directory
     */
    ensureDirectoryExists() {
        try {
            if(!fs.existsSync(this.reportPath)) {
                mkdirp.sync(this.reportPath);
            }
        } catch(err) {
            console.error(err);
        }

        if(this.world.debug) console.log('Report:ensureDirectoryExists: '+this.reportPath);
    }

    /**
     * Generate report
     */
    generate() {
        if(this.world.debug) console.log('Report:generate');

        let options = {
                theme: 'bootstrap',
                jsonFile: this.reportPath+'/cucumber_report.json',
                output: this.reportPath+'/cucumber_report.html',
                reportSuiteAsScenarios: true,
                launchReport: true
            };
     
        reporter.generate(options);
    }
};

module.exports = Report;