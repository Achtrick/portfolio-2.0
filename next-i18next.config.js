const path = require("path");

module.exports = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
    localePath: path.resolve("./public/locales"),
  },
  react: { useSuspense: false },
};
