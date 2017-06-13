/* eslint-disable no-unused-expressions */

module.exports = (grunt) => {

    const runAllTasks = (isProd) => {
        !isProd && isWrapperApp && tasks.push(
            'webpack:dev'
        );

        return grunt.task.run(...tasks);
    };

    grunt.registerTask(
        'build',
        'Main task to build the application',
        () => {
            grunt.task.run('webpack:dev');
        }
    );

};

