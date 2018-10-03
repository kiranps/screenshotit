module.exports = {
  webpack: {
    html: {
      template: "./demo/public/index.html"
    },
    copy: {
      patterns: [{ from: "./demo/public" }]
    }
  }
};
