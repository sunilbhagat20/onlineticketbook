const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: "http://localhost:9000/tutorials?id=onlinetickerbook",
    token: "sqp_65ad51cd8cae2208e6d2fd5f7c3bb3cab59b0dbb",    
    options: {
      "sonar.projectKey":"onlinetickerbook",
      "sonar.projectName": "onlineticketbook-api",
      "sonar.projectDescription": "demo online ticket book",
      "sonar.sourceEncoding":"UTF-8",
      "sonar.sources": "./src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.exclusions": "test/*, node_modules/*, public/*",
      "sonar.tests":"./src",
      "sonar.testExecutionReportPaths":"test-report.xml",
      "sonar.javascript.lcov.reportPaths":"coverage/lcov.info",
      "sonar.java.binaries": "**/*.java"
    },
  },
  () => process.exit()
);
