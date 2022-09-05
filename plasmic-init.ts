import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./components/HelloWorld";
import { Hero } from "./components/Hero";
import { Team } from "./components/Team";
import { TeamMember } from "./components/TeamMember";
import { FAQs } from "./components/FAQs";
import { FAQ } from "./components/FAQ";

export const PLASMIC = initPlasmicLoader({
  // DEV environment
  projects: [
    {
      id: "sTUmRh2NoLQX9kP6f8Xowd",
      token:
        "WrtAualkJjuzrtW4lT682bw4ZHj9C5aZW4c05A6JHDxdsRyXsFDlr9irwF04XFql5kh8vyXpzJwUYkw5VkfA",
    },
  ],
  // PROD environment
  // projects: [
  //   {
  //     id: "xtaMrDhZRWf5hrCyRjT8NX",
  //     token:
  //       "XVTqvR7pxy29DxC7pc9agKytIFVbgOySZV2sM5zNrLKbcMAQcBpAqpHMknISJaf4xvnHHa3Elx6SIDqRoNg",
  //   },
  // ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
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
    tagline: "string",
    description: "string",
  },
});

PLASMIC.registerComponent(Team, {
  name: "Team",
  props: {
    heading: "string",
    description: "string",
    children: {
      type: "slot",
      allowedComponents: ["TeamMember"],
      defaultValue: [
        {
          type: "component",
          name: "TeamMember",
          props: {
            name: "Taimur",
            role: "Senior Designer",
            imageUrl:
              "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
          },
        },
        {
          type: "component",
          name: "TeamMember",
          props: {
            name: "Benny",
            role: "Senior Designer",
            imageUrl:
              "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
          },
        },
      ],
    },
  },
});

PLASMIC.registerComponent(TeamMember, {
  name: "TeamMember",
  props: {
    name: "string",
    imageUrl: "string",
    role: "string",
  },
});

PLASMIC.registerComponent(FAQs, {
  name: "FAQs",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["FAQ"],
      defaultValue: [
        {
          type: "component",
          name: "FAQ",
          props: {
            question: "What's the best thing about Switzerland?",
            answer:
              "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
          },
        },
      ],
    },
  },
});

PLASMIC.registerComponent(FAQ, {
  name: "FAQ",
  props: {
    question: "string",
    answer: "string",
  },
});
