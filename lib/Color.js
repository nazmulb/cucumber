/**
 * Color Related Methods
 */
class Color {
    /**
     * Instantiate the object
     */
    constructor(){
        this.rgbColorRegExp = /red|green|blue/i;
    }

    /**
     * Is Found
     * @param  {String} color - Name of color
     * @return {String} found/not found
     */
    isFound(color) {
        return (new RegExp(this.rgbColorRegExp).test(color)) ? 'found' : 'not found';
    }
}

module.exports = Color;