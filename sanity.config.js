/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: isDev
    ? [
        structureTool(),
        visionTool({ defaultApiVersion: apiVersion }),
        vercelDeployTool(),
      ]
    : [structureTool(), vercelDeployTool()],
});
