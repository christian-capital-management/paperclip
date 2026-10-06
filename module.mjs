// @ts-check
import { module } from "@prisma/composer";
import serverService from "./server/service.mjs";
import kvDemoMcpServerService from "./packages/kv-demo-mcp-server/service.mjs";

export default module("paperclip", ({ provision }) => {
  provision(serverService);
  provision(kvDemoMcpServerService, { id: "kvdemomcpserver" });
});
