/**
 * Day Related Methods
 */

var day = module.exports = function() {};


/**
 * Is it Friday
 * @param  String Day name of today
 * @return String Yes/No
 */
day.prototype.isItFriday = function(today) {
    return (today === "Friday") ? 'Yes' : 'No';
};