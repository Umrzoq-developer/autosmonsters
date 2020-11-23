const path = require('path');
const {override} = require('customize-cra')


const options = {
  stylesDir: path.join(__dirname, './src/index.css'),
  themeVariables: [],
  indexFileName: 'index.html',
  generateOnce: false // generate color.less on each compilation
};


const overrideProcessEnv = value => config => {
  config.resolve.modules = [
    path.join(__dirname, 'src')
  ].concat(config.resolve.modules);
  return config;
};

module.exports = override(
  overrideProcessEnv({
    VERSION: JSON.stringify(require('./package.json').version),
  })
);
