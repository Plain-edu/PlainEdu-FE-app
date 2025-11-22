// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// 기본 Expo Metro 설정
const config = getDefaultConfig(__dirname);

// 🔑 Metro 웹에서 tslib를 ESM 빌드로 강제 alias
//    (이걸 안 하면 tslib.default가 undefined로 들어와서 __extends를 못 꺼냄)
const ALIASES = {
  tslib: require.resolve("tslib/tslib.es6.js"),
};

// resolver 커스터마이징
config.resolver = {
  ...(config.resolver || {}),
  resolveRequest: (context, moduleName, platform) => {
    const redirected = ALIASES[moduleName] ?? moduleName;
    return context.resolveRequest(context, redirected, platform);
  },
};

// NativeWind 통합 (기존 설정 유지)
module.exports = withNativeWind(config, { input: "./src/app/global.css" });
