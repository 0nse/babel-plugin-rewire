import 'es6-promise/auto';

const testsContext = require.context('../specs', true, /\.spec\.js$/);

testsContext.keys().forEach(testsContext);
