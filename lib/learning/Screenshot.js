const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');

const writeFile = Promise.promisify(fs.writeFile);
const exists = Promise.promisify(fs.existsSync);

/**
 * Day Related Methods
 */
class Screenshot {

    /**
     * Ensure directory exists or not; if not then it will create new directory
     */
    async ensureDirectoryExists(screenshotPath) {
        if(await !exists(screenshotPath)) {
            await fs.mkdirSync(screenshotPath, { recursive: true }, function(err) {
                if(err) {
                    console.log(err);
                }
            }).catch( function(err) { console.error(err) });
        }
    }

    /**
     * Create screenshot
     * @param  String File Name
     */
    async create(driver, fileName, screenshotPath) {
        await driver.takeScreenshot().then( async function(data) {
            const filePath = path.join(screenshotPath, fileName);
            const base64Data = data.replace(/^data:image\/png;base64,/, "");
            try {
                await writeFile(filePath, base64Data, "base64", function(err) {
                    if(err) {
                        console.log(err);
                    }
                });
            } catch (e) {
                console.log(e)
            }
        }).catch( function(err) { console.error(err) });
    }
};

module.exports = Screenshot;