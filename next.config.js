/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

module.exports = {
  i18n,
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
};
