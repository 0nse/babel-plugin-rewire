const path = require('path');
const loadGruntConfig = require('load-grunt-config');

module.exports = (grunt) => {
    loadGruntConfig(grunt, { configPath: path.join(process.cwd(), 'grunt/config') });
    grunt.loadTasks('./grunt/tasks/');
};

