const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

export default class Screenshot {

  constructor(browser) {
    this.directory = path.join("tmp", "screenshots");
    this.browser = browser;
  }

  ensureDirectoryExists() {
    try {
      fs.statSync(this.directory);
    } catch (exc) {
      mkdirp.sync(this.directory);
    }
  }

  create(fileName) {
    this.browser.takeScreenshot().then((data) => {
      const filePath = path.join(this.directory, fileName);
      const base64Data = data.replace(/^data:image\/png;base64,/, "");
      fs.writeFile(filePath, base64Data, "base64", (err) => { if(err) console.log(err) });
    });
  }

};
