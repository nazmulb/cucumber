const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');

const writeFile = Promise.promisify(fs.writeFile);
const exists = Promise.promisify(fs.existsSync);
const mkdirSync = Promise.promisify(fs.mkdirSync);

/**
 * Day Related Methods
 */
class Screenshot {

    /**
     * Ensure directory exists or not; if not then it will create new directory
     */
    async ensureDirectoryExists(screenshotPath) {
        try {
            if(await !exists(screenshotPath)) {
                await mkdirSync(screenshotPath, { recursive: true });
            }
        } catch(err) {
            console.error(err);
        }
    }

    /**
     * Create screenshot
     * @param  String File Name
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