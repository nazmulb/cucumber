const path = require('path');
const fs = require('fs');

/**
 * Day Related Methods
 */
class Screenshot {

    constructor(driver) {
        this.screenshotPath = path.join("screenshots");
        this.driver = driver;
    }

    /**
     * Ensure directory exists or not; if not then it will create new directory
     */
    ensureDirectoryExists() {
        if(!fs.existsSync(this.screenshotPath)) {
            fs.mkdirSync(this.screenshotPath, { recursive: true }, function(err) {
                if(err) {
                    console.log(err);
                }
            });
        }
    }

    /**
     * Create screenshot
     * @param  String File Name
     */
    create(fileName) {
        this.driver.takeScreenshot().then( function(data) {
            const filePath = path.join(this.screenshotPath, fileName);
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
        });
    }
};

module.exports = Screenshot;