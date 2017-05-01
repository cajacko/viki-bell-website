// import util from 'util';
import { parseString } from 'xml2js';
import { readFileSync } from 'fs';

const xml = readFileSync('coverage/clover.xml', 'utf8');

function returnCoverageStats(statements, coveredstatements) {
  const percentage = Math.round(
    (parseInt(coveredstatements, 10) / parseInt(statements, 10)) * 100,
  );

  return `${coveredstatements}/${statements} - ${percentage}%`;
}

function notFullCoverage({
  statements,
  coveredstatements,
  conditionals,
  coveredconditionals,
  methods,
  coveredmethods,
  elements,
  coveredelements,
}) {
  const coverage = {};
  let isFullCoverage = true;

  if (statements !== coveredstatements) {
    coverage.statements = returnCoverageStats(statements, coveredstatements);
    isFullCoverage = false;
  }

  if (conditionals !== coveredconditionals) {
    coverage.conditionals = returnCoverageStats(
      conditionals,
      coveredconditionals,
    );

    isFullCoverage = false;
  }

  if (methods !== coveredmethods) {
    coverage.methods = returnCoverageStats(methods, coveredmethods);
    isFullCoverage = false;
  }

  if (elements !== coveredelements) {
    coverage.elements = returnCoverageStats(elements, coveredelements);
    isFullCoverage = false;
  }

  if (isFullCoverage) {
    return false;
  }

  return coverage;
}

parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  const coverage = notFullCoverage(result.coverage.project[0].metrics[0].$);

  if (coverage) {
    const keys = Object.keys(coverage);

    // eslint-disable-next-line
    console.log('Jest does not cover everything!');
    // eslint-disable-next-line
    console.log('Check /web/src/coverage/lcov-report/index.html for more');

    // eslint-disable-next-line
    keys.forEach(key => console.log(`  ${key}: ${coverage[key]}`));

    throw new Error('Jest does not cover everything!');
  }

  // eslint-disable-next-line
  console.log('Jest has everything covered');
});
