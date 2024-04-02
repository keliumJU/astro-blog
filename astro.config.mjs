import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: "https://kelium-blog.netlify.app/",
  integrations: [lit(), preact()]
});
