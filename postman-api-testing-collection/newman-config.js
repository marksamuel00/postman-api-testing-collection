const newman = require('newman');

const runOptions = {
  collection: require('./collections/reqres-api-tests.postman_collection.json'),
  environment: require('./environments/reqres-env.postman_environment.json'),
  reporters: ['cli', 'htmlextra'],
  reporter: {
    htmlextra: {
      export: './reports/test-report.html',
      title: 'API Test Report - JSONPlaceholder',
      browserTitle: 'API Test Results',
      showEnvironmentData: true,
      showGlobalData: false,
    },
  },
  iterationCount: 1,
  timeoutRequest: 10000,
  insecure: false,
};

newman.run(runOptions, (err, summary) => {
  if (err) {
    console.error('Collection run encountered an error:', err);
    process.exit(1);
  }

  const { stats } = summary.run;
  console.log('\n--- Test Summary ---');
  console.log(`Total Requests: ${stats.requests.total}`);
  console.log(`Failed Requests: ${stats.requests.failed}`);
  console.log(`Total Assertions: ${stats.assertions.total}`);
  console.log(`Failed Assertions: ${stats.assertions.failed}`);

  if (stats.assertions.failed > 0) {
    process.exit(1);
  }
});
