const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');
const mkdirp = require('mkdirp');

const writeFile = Promise.promisify(fs.writeFile);

/**
 * Day Related Methods
 */
class Screenshot {

    /**
     * Ensure directory exists or not; if not then it will create new directory
     * @param {String} screenshotPath - Screenshot path
     */
    ensureDirectoryExists(screenshotPath) {
        try {
            if(!fs.existsSync(screenshotPath)) {
                mkdirp.sync(screenshotPath);
            }
        } catch(err) {
            console.error(err);
        }
    }

    /**
     * Create screenshot
     * @param {Builder} driver - Driver instance of browser
     * @param {String} fileName - File name
     * @param {String} screenshotPath - Screenshot path
     */
    async create(driver, fileName, screenshotPath) {
        try {
            const data = await driver.takeScreenshot();
            const filePath = path.join(screenshotPath, fileName);
            const base64Data = data.replace(/^data:image\/png;base64,/, "");
           
            await writeFile(filePath, base64Data, "base64");
        } catch(err) {
            console.error(err);
        }
    }
};

module.exports = Screenshot;