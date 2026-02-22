import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-roboto)" },
        body: { value: "var(--font-roboto)" },
      },
      colors: {
        brand: {
          50: { value: "#F7F8F0" },
          100: { value: "#9CD5FF" },
          500: { value: "#7AAACE" },
          900: { value: "#355872" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
