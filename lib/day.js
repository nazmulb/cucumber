/**
 * Day Related Methods
 */

var Day = module.exports = function() {};


/**
 * Is it Friday
 * @param  String Day name of today
 * @return String Yes/No
 */
Day.prototype.isItFriday = function(today) {
    return (today === "Friday") ? 'Yes' : 'No';
};