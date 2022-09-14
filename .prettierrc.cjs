// prettier-plugin-astro - pnpm support
// https://github.com/withastro/prettier-plugin-astro/blob/main/README.md#pnpm-support-1

module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        astroAllowShorthand: true,
      },
    },
  ],
};
