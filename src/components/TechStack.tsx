import {
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import { styles } from "./common-tw-styles";

const TechStack = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-4">
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <Link
          href="https://react.dev/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiReact className={styles.iconStyles} color={styles.iconColor} />
        </Link>
        <Link
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiNextdotjs className={styles.iconStyles} color={styles.iconColor} />
        </Link>
        {/* <Link className={styles.defaultStyles}>
          <SiJavascript
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </Link> */}
        <Link
          href="https://www.typescriptlang.org/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiTypescript
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </Link>
        <Link
          href="https://reactnative.dev/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <FaMobileAlt className={styles.iconStyles} color={styles.iconColor} />
        </Link>
      </div>

      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <Link
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiTailwindcss
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </Link>
        <Link
          href="https://www.radix-ui.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiRadixui className={styles.iconStyles} color={styles.iconColor} />
        </Link>

        <Link
          href="https://www.mongodb.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiMongodb className={styles.iconStyles} color={styles.iconColor} />
        </Link>
        <Link
          href="https://git-scm.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiGit className={styles.iconStyles} color={styles.iconColor} />
        </Link>
      </div>
    </section>
  );
};

export default TechStack;
