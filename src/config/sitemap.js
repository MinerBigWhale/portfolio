import path from "path";
import sm from "sitemap";
import fs from "fs";

const OUTPUT_FILE = path.resolve(
  __dirname,
  "..",
  "..",
  "public",
  "sitemap.xml"
);

const sitemap = sm.createSitemap({
  hostname: "https://sabesansathananthan.now.sh/",
  cacheTime: 600000, //600 sec (10 min) cache purge period
  urls: [
    { url: "/", changefreq: "monthly", priority: 1 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/projects", changefreq: "monthly", priority: 0.8 },
    { url: "/blog", changefreq: "weekly", priority: 0.9 },
    { url: "/media", changefreq: "monthly", priority: 0.6 },
    { url: "/contact", changefreq: "monthly", priority: 0.7 },
  ],
});
console.log(sitemap);

fs.writeFileSync(OUTPUT_FILE, sitemap.toString());

console.log(`Sitemap written at ${OUTPUT_FILE}`);
