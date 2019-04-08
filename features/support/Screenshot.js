const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');
const mkdirp = require('mkdirp');
const writeFile = Promise.promisify(fs.writeFile);

/**
 * Screenshot Related Methods
 */
class Screenshot {

    /**
     * Instantiate the object
     * @param {World} world - world object instance
     */
    constructor(world) {
        this.world = world;
        this.screenshotPath = path.join("reports", "screenshots");

        if(this.world.debug) console.log('Screenshot:constructor');
    }

    /**
     * Ensure directory exists or not; if not then it will create new directory
     */
    ensureDirectoryExists() {
        try {
            if(!fs.existsSync(this.screenshotPath)) {
                mkdirp.sync(this.screenshotPath);
            }
        } catch(err) {
            console.error(err);
        }

        if(this.world.debug) console.log('Screenshot:ensureDirectoryExists: '+this.screenshotPath);
    }

    /**
     * Create screenshot
     * @param {String} fileName - File name
     */
    async create(fileName) {
        try {
            const data = await this.world.driver.takeScreenshot();
            // Attaching screenshot to report
            await this.world.attach(data, 'image/png');
            
            const filePath = path.join(this.screenshotPath, fileName);
            const base64Data = data.replace(/^data:image\/png;base64,/, "");
           
            await writeFile(filePath, base64Data, "base64");
        } catch(err) {
            console.error(err);
        }

        if(this.world.debug) console.log('Screenshot:create: '+this.screenshotPath);
    }
};

module.exports = Screenshot;