/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { TeamMember } from "./TeamMember";

export function Team({
  heading,
  description,
  children
}: {
  heading: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl sm:tracking-tight">
              {heading}
            </h2>
            <p className="text-xl text-gray-300">
              {description}
            </p>
          </div>
          <ul
            role="list"
            className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}
