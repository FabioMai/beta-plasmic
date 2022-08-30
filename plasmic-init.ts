import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./components/HelloWorld";
import { Hero } from "./components/Hero";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "sTUmRh2NoLQX9kP6f8Xowd",
      token:
        "WrtAualkJjuzrtW4lT682bw4ZHj9C5aZW4c05A6JHDxdsRyXsFDlr9irwF04XFql5kh8vyXpzJwUYkw5VkfA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    // Simple scalar props
    heading: "string",
    description: "string",
    test: "string",
  },
});

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {
    // Simple scalar props
    tagline: "string",
    description: "string",
  },
});
