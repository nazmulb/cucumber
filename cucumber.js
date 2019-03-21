// Default command line arguments
// In order to prevent users from having to enter the options they use every time
// Users can define cucumber.js with profiles which are groups of command line arguments.

module.exports = {
    'default': '--format summary',
    dry: '--dry-run',
    progress: '--format progress'
};