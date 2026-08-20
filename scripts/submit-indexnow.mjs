const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mentallionsystems.com"
).replace(/\/+$/, "");
const key = process.env.INDEXNOW_KEY?.trim();

if (!key) {
  throw new Error("INDEXNOW_KEY is required.");
}

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);

if (!sitemapResponse.ok) {
  throw new Error(
    `Could not load sitemap: ${sitemapResponse.status} ${sitemapResponse.statusText}`
  );
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => url.startsWith(`${siteUrl}/`));

if (urlList.length === 0) {
  throw new Error("No site URLs were found in the sitemap.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/indexnow-key.txt`,
    urlList
  })
});

if (!response.ok) {
  throw new Error(
    `IndexNow submission failed: ${response.status} ${response.statusText}`
  );
}

console.log(`Submitted ${urlList.length} URLs to IndexNow.`);
