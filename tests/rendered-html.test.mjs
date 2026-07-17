import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const TEST_ORIGIN = "https://northstar.example";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${encodeURIComponent(pathname)}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, TEST_ORIGIN), {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "northstar.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function assertSharedSeo(html, canonicalPath) {
  assert.match(
    html,
    new RegExp(
      `<link rel="canonical" href="${TEST_ORIGIN}${canonicalPath}"\\s*/?>`,
      "i",
    ),
  );
  assert.match(
    html,
    new RegExp(
      `<link rel="alternate" hrefLang="en" href="${TEST_ORIGIN}/"\\s*/?>`,
      "i",
    ),
  );
  assert.match(
    html,
    new RegExp(
      `<link rel="alternate" hrefLang="zh-CN" href="${TEST_ORIGIN}/zh"\\s*/?>`,
      "i",
    ),
  );
  assert.match(
    html,
    new RegExp(
      `<link rel="alternate" hrefLang="x-default" href="${TEST_ORIGIN}/"\\s*/?>`,
      "i",
    ),
  );
}

test("server-renders the English landing page at the default route", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(
    html,
    /<title>Northstar Nexus Education \| Chart Your Path in the Age of AI<\/title>/i,
  );
  assert.match(html, /In the Age of AI/i);
  assert.match(html, /Chart Your Path Forward/i);
  assert.match(html, /href="\/zh"/i);
  assert.match(html, /property="og:url" content="https:\/\/northstar\.example\/"/i);
  assert.match(html, /property="og:locale" content="en_US"/i);
  assert.match(html, /https:\/\/northstar\.example\/og-en\.png/i);
  assertSharedSeo(html, "/");
  assert.doesNotMatch(
    html,
    /Your site is taking shape|codex-preview|react-loading-skeleton/,
  );
});

test("server-renders the Chinese landing page at /zh", async () => {
  const response = await render("/zh");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(
    html,
    /<title>北辰智汇｜在 AI 时代，为成长建立坐标<\/title>/i,
  );
  assert.match(html, /为成长建立坐标/);
  assert.match(html, /AI \+ 科研/);
  assert.match(html, /href="\/"/i);
  assert.match(html, /property="og:url" content="https:\/\/northstar\.example\/zh"/i);
  assert.match(html, /property="og:locale" content="zh_CN"/i);
  assert.match(html, /https:\/\/northstar\.example\/og-zh\.png/i);
  assertSharedSeo(html, "/zh");
  assert.doesNotMatch(
    html,
    /Your site is taking shape|codex-preview|react-loading-skeleton/,
  );
});

test("keeps the bilingual route and metadata architecture production-ready", async () => {
  const [enPage, zhPage, enLayout, zhLayout, metadata, packageJson] =
    await Promise.all([
      readFile(new URL("../app/(en)/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/(zh)/zh/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/(en)/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/(zh)/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/_lib/site-metadata.ts", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
    ]);

  assert.match(enPage, /<MarketingPage locale="en" \/>/);
  assert.match(zhPage, /<MarketingPage locale="zh" \/>/);
  assert.match(enLayout, /<html lang="en">/);
  assert.match(zhLayout, /<html lang="zh-CN">/);
  assert.match(metadata, /"x-default": new URL\("\/", metadataBase\)/);
  assert.match(metadata, /image: "\/og-en\.png"/);
  assert.match(metadata, /image: "\/og-zh\.png"/);
  assert.doesNotMatch(metadata, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
