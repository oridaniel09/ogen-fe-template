import React from "react";
import i18n from "./i18n";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <RouterProvider router={router} />
    </CacheProvider>
  );
}
