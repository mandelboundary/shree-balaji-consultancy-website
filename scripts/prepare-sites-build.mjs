import { copyFile, mkdir, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const serverDirectory = new URL("dist/server/", projectRoot);
const hostingDirectory = new URL("dist/.openai/", projectRoot);

const workerSource = `const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || request.method !== "GET") {
      return response;
    }

    const url = new URL(request.url);
    if (!url.pathname.endsWith("/")) {
      url.pathname = url.pathname + "/";
      const trailingSlashResponse = await env.ASSETS.fetch(new Request(url, request));
      if (trailingSlashResponse.status !== 404) {
        return trailingSlashResponse;
      }
    }

    return response;
  },
};

export default worker;
`;

await mkdir(serverDirectory, { recursive: true });
await mkdir(hostingDirectory, { recursive: true });
await writeFile(new URL("index.js", serverDirectory), workerSource, "utf8");
await copyFile(
  new URL(".openai/hosting.json", projectRoot),
  new URL("hosting.json", hostingDirectory),
);
