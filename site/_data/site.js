module.exports = {
  name: "Pentagon Accord",
  shortDesc:
    "Retarded Blog.",
  url: "https://pentagon.cyou",
  authorEmail: "admin@pentagon.cyou",
//  authorHandle: "@twitter",
  authorName: "Crypto JeSUS",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "#666",
    },
    secondary: {
      background: "black",
      text: "white",
      highlight: "#666",
    },
  },

  keystone: {
    comments: false,
    bookmarks: false,
    claps: false,
    login: false,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: true,
};
