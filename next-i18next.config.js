const path = require("path");

module.exports = {
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "en",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
  react: { useSuspense: false },
};
