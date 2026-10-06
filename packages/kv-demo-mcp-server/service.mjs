// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "kv-demo-mcp-server",
  deps: {},
  build: node({ module: import.meta.url, dir: "src", entry: "index.ts" }),
});
