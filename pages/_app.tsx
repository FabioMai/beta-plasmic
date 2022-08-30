import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Make use of data fetched by the page component's getStaticProps()
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={pageProps.plasmicData}
    >
      <div>
        {/* <PlasmicComponent component="HelloWorld" /> */}
        <Component {...pageProps} />
      </div>
    </PlasmicRootProvider>
  );
}
