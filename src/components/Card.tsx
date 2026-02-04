import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: (CollectionEntry<"blog">["data"] & {
    technologies?: string[];
  }) | {
    title: string;
    description: string;
    technologies?: string[];
  };
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title,description, technologies } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="block p-7 rounded-lg border-2 border-skin-line hover:border-skin-accent hover:scale-105 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        <p>{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full border-2 border-skin-accent text-skin-accent hover:bg-skin-accent hover:text-skin-inverted transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </a>
      {/* <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} /> */}
    </li>
  );
}
// import { slugifyStr } from "@utils/slugify";
// import Datetime from "./Datetime";
// import type { CollectionEntry } from "astro:content";

// export interface Props {
//   href?: string;
//   frontmatter: CollectionEntry<"blog">["data"] & {
//     technologies?: string[];
//   };
//   secHeading?: boolean;
// }

// export default function Card({ href, frontmatter, secHeading = true }: Props) {
//   const { title, pubDatetime, modDatetime, description, technologies } = frontmatter;

//   const headerProps = {
//     style: { viewTransitionName: slugifyStr(title) },
//     className: "text-lg font-medium decoration-dashed",
//   };

//   return (
//     <li className="my-6">

//         href={href}
//         className="block p-7 rounded-lg border-2 border-skin-line hover:border-skin-accent hover:scale-105 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
//       >
//         {secHeading ? (
//           <h2 {...headerProps}>{title}</h2>
//         ) : (
//           <h3 {...headerProps}>{title}</h3>
//         )}
//         <p>{description}</p>

//       </a>
//       {/* <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} /> */}

//     </li>
//   );
// }
