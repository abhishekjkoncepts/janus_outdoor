const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// Create a sitemap stream instance
const sitemap = new SitemapStream({ hostname: "http://www.janusalive.com" });

// Specify the path to output the sitemap
const writeStream = createWriteStream(
  path.join(__dirname, "public", "sitemap.xml")
);

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// Add your routes to the sitemap
sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/about-us/", changefreq: "daily", priority: 0.8 });
sitemap.write({ url: "/contact-us/", changefreq: "daily", priority: 0.5 });

// End the stream
sitemap.end();

// Handle the completion of the stream
streamToPromise(sitemap)
  .then(() => console.log("Sitemap created"))
  .catch(console.error);
