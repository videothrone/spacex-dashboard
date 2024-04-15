module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
        @import "src/assets/scss/mixins/_mixins.scss";
        `,
      },
    },
  },
};
