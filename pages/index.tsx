import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";
import Head from "next/head";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beta Design</title>
        <meta
          name="description"
          content="Agentur für Produktbildoptimierungen"
        />
      </Head>
      <Hero />
    </>
  );
}
// export async function getStaticProps() {
//   // Be sure to also fetch data for `NavHeader`
//   const plasmicData = await PLASMIC.fetchComponentData("SomePage", "NavHeader");
//   return {
//     props: {
//       plasmicData,
//     },
//   };
// }

// export default function SomePage() {
//   // no need for <PlasmicRootProvider />
//   return <PlasmicComponent component="SomePage" />;
// }
