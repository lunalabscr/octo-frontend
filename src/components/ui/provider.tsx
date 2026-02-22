"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { system } from "@/theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <CacheProvider>
      <ChakraProvider value={system}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </CacheProvider>
  );
}
