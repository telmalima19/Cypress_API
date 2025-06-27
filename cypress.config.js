const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-multi-reporters',
  reporterOptions:{
    reporterEnable:'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions:{
      mochaFile:'cypress/reports/junit/results.xml'
    },
    cypressMochawesomeReporterReporterOptions:{
      charts: true,
      reportPageTitle: 'Relatorio Testes',
      embeddedScreenshots: true,
      saveAllAttempts: false,
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      require ('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
