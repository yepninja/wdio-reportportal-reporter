import * as Launcher from "webdriverio/build/lib/launcher";

function run(specs, wdioConfigPath) {
  const launcher = new Launcher(wdioConfigPath, {
    specs,
  });

  return launcher.run();
}

export const runMocha = (specs, wdioConfigPath?) => {
  const features = specs.map((spec) => `./test/fixtures/specs/${spec}.js`);
  const path = wdioConfigPath || "./test/fixtures/wdio.conf/wdio.conf.mocha.js";

  return run(features, path);
};

export const runCucumber = (specs, wdioConfigPath?) => {
  const features = specs.map((feature) => `./test/fixtures/features/${feature}.feature`);
  const configPath = wdioConfigPath || "./test/fixtures/wdio.conf/wdio.conf.js";

  return run(features, configPath);
};
