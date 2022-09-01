/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

interface TeamMember {
    name: string;
    imageUrl: string;
    role: string;
}

export function TeamMember({name, imageUrl, role} : TeamMember) {
  return (
              <li
                key={name}
                className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                    src={imageUrl}
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="text-white">{name}</h3>
                      <p className="text-yellow-300">{role}</p>
                    </div>
                  </div>
                </div>
              </li>  );
}
