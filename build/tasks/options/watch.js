module.exports = {
    sass: {
        files: 'frontend/static_files/sass/{,*/}*.{scss,sass}',
        tasks: ['sass']
    },
    scripts: {
        files: ['build/index.html', 'build/requirejs.json', 'build/config/config.json', 'build/config/development.json',  'build/config/production.json'],
        tasks: ['build'],
        options: {
            spawn: false
        }
    },
    tests: {
        files: ['build/test-main.js', 'build/requirejs.json'],
        tasks: ['buildTest'],
        options: {
            spawn: false
        }
    }
};
