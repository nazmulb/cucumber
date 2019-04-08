const path = require('path');
const reporter = require('cucumber-html-reporter');
const reportPath = path.join("reports")

/**
 * Report Related Methods
 */
class Report {
    /**
     * Generate report
     */
    static generate() {
        let options = {
                theme: 'bootstrap',
                jsonFile: reportPath+'/cucumber_report.json',
                output: reportPath+'/cucumber_report.html',
                reportSuiteAsScenarios: true,
                launchReport: true
            };
     
        reporter.generate(options);
    }
};

module.exports = Report;