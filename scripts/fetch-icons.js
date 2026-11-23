#!/usr/bin/env node
/*
 * Maintenance helper: fetch icons for hosts that are missing from icon-map.json.
 *
 * Usage: node scripts/fetch-icons.js
 *
 * Icons are stored under icons/ with a hashed file name, so the path never
 * contains the host (some networks reset connections on domain-like paths).
 * Run it only when you add new links; the repository already ships the icons,
 * so this is not an install step.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.resolve(__dirname, "..");
const mapPath = path.join(root, "icon-map.json");
const catalogFiles = ["catalog.json", "catalog-zh.json"];

const EXT = {
  "image/png": "png",
  "image/svg+xml": "svg",
  "image/x-icon": "ico",
  "image/vnd.microsoft.icon": "ico",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp"
};

const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));

function hosts() {
  const found = new Set();
  for (const file of catalogFiles) {
    const full = path.join(root, file);
    if (!fs.existsSync(full)) continue;
    const catalog = JSON.parse(fs.readFileSync(full, "utf8"));
    for (const category of catalog.categories || []) {
      for (const row of category.rows || []) {
        for (const link of row.links || []) {
          try {
            found.add(new URL(link.url).hostname);
          } catch {
            /* skip malformed URLs */
          }
        }
      }
    }
  }
  return [...found];
}

function fileName(host, ext) {
  return `icons/${crypto.createHash("sha1").update(host).digest("hex").slice(0, 12)}.${ext}`;
}

async function fetchIcon(host) {
  const response = await fetch(`https://0x3.com/icon?host=${encodeURIComponent(host)}`, {
    headers: { "user-agent": "Mozilla/5.0" }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const type = (response.headers.get("content-type") || "").split(";")[0].trim();
  const ext = EXT[type];
  if (!ext) throw new Error(`unexpected type ${type}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 64) throw new Error(`too small (${buffer.length} bytes)`);
  fs.writeFileSync(path.join(root, fileName(host, ext)), buffer);
  return fileName(host, ext);
}

(async () => {
  const all = hosts();
  const missing = all.filter((host) => !map[host]);
  if (!missing.length) {
    console.log(`all ${all.length} hosts already have icons`);
    return;
  }
  console.log(`fetching ${missing.length} of ${all.length} hosts`);
  const failures = [];
  let index = 0;
  const worker = async () => {
    while (index < missing.length) {
      const host = missing[index++];
      try {
        map[host] = await fetchIcon(host);
        console.log(`ok   ${host}`);
      } catch (error) {
        failures.push(`${host}: ${error.message}`);
        console.log(`fail ${host}: ${error.message}`);
      }
    }
  };
  await Promise.all(Array.from({ length: 3 }, worker));

  const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(mapPath, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(`icon-map.json now has ${Object.keys(sorted).length} entries, ${failures.length} failed`);
  if (failures.length) process.exitCode = 1;
})();
