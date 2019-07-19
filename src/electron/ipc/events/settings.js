const {mkdirIfNotPresent} = require('../../../js/utils');
const path = require('path');
const fs = require('fs');
const os = require('os');

// Validator
const Validator = require('jsonschema').Validator;
const validator = new Validator();

// Settings Schema and default settings
const settingsSchema = require('../../../../config/settings.schema');
const defaultSettings = require('../../../../config/settings.default.json');

// Settings name
const settingsFileName = 'settings.json';

/**
 * Load settings from file or by error use the defaults
 * @returns {string}
 */
const userSettings = (() => {
    let settings;

    try {

        // Load path
        const settingFilePath = mkdirIfNotPresent(path.resolve(os.homedir(), '.amxxdl/'));
        const settingsFile = path.resolve(settingFilePath, settingsFileName);

        // Load file and parse json
        settings = JSON.parse(fs.readFileSync(settingsFile, 'utf8'));
    } catch (e) {

        // Use defaultSettings as fallback
        settings = defaultSettings;

        // Resolve static paths
        settings.downloadDirectory = path.resolve(os.homedir(), 'Downloads');
        settings.temporaryDirectory = path.resolve(os.tmpdir(), 'amxxdl');
    }

    // Validate settings props with default file, fill up missing properties
    for (const [prop, value] of Object.entries(defaultSettings)) {
        if (!(prop in settings)) {
            settings[prop] = value;
        }
    }

    const {downloadDirectory, temporaryDirectory} = settings;
    Object.defineProperties(settings, {
        downloadDirectory: {get: () => mkdirIfNotPresent(downloadDirectory)},
        temporaryDirectory: {get: () => mkdirIfNotPresent(temporaryDirectory)}
    });

    return settings;
})();

module.exports = {

    async getSettings() {
        return userSettings;
    },

    /**
     * Update settings
     * @param settings Overwrite settings
     * @returns {Promise<*>}
     */
    async applySettings(settings = {}) {

        // Validate
        const validationResult = validator.validate(settings, settingsSchema);
        if (validationResult.errors.length === 0) {

            // Apply new settings
            for (const [key, value] of Object.entries(settings)) {

                // Define getter for directory stuff
                if (['downloadDirectory', 'temporaryDirectory'].includes(key)) {
                    Object.defineProperty(userSettings, key, {
                        get: () => mkdirIfNotPresent(value)
                    });
                } else {
                    userSettings[key] = value;
                }
            }

            // Resolve path
            const settingFilePath = mkdirIfNotPresent(path.resolve(os.homedir(), '.amxxdl/'));
            const settingFile = path.resolve(settingFilePath, settingsFileName);

            // Overwrite current settings file
            fs.writeFileSync(settingFile, JSON.stringify(userSettings, null, 4));
            return 'ok';
        }

        // Throw errors
        throw validationResult;
    }
};

