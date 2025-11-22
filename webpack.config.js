const { getDefaultConfig } = require('expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await getDefaultConfig({ ...env, isTS: true });

  // 핵심: tslib import를 CJS 엔트리로 고정해서 default 문제 차단
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    tslib$: require.resolve('tslib/tslib.js'),
  };

  return config;
};
