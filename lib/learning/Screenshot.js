const path = require('path');
const fs = require('fs');

/**
 * Day Related Methods
 */
class Screenshot {

    constructor(driver) {
        const screenshotPath = path.join("screenshots");
        this.driver = driver;
    }

    /**
     * Ensure directory exists or not; if not then it will create new directory
     */
    async ensureDirectoryExists() {
        if(!await fs.existsSync(this.screenshotPath)) {
            await fs.mkdirSync(this.screenshotPath, { recursive: true }, function(err) {
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
    async create(fileName) {
        await this.driver.takeScreenshot().then( function(data) {
            const filePath = path.join("screenshots", fileName);
            const base64Data = data.replace(/^data:image\/png;base64,/, "");
            try {
                fs.writeFile(filePath, base64Data, "base64", function(err) { 
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