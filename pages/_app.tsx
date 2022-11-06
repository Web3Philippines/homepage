import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Polygon}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
