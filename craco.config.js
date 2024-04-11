module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
        @import "src/assets/scss/mixins/_list-reset.scss";
        `,
      },
    },
  },
};
