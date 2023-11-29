import {
  SiAntdesign,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { styles } from "./common-tw-styles";

const TechStack = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-4">
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <figure className={styles.defaultStyles}>
          <SiReact className={styles.iconStyles} color={styles.iconColor} />
        </figure>
        <figure className={styles.defaultStyles}>
          <SiNextdotjs className={styles.iconStyles} color={styles.iconColor} />
        </figure>

        <figure className={styles.defaultStyles}>
          <SiJavascript
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </figure>
        <figure className={styles.defaultStyles}>
          <SiTypescript
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </figure>
        <figure className={`${styles.defaultStyles} lg:hidden`}>
          <SiNodedotjs className={styles.iconStyles} color={styles.iconColor} />
        </figure>
        <figure className={`${styles.defaultStyles} lg:hidden`}>
          <SiAntdesign className={styles.iconStyles} color={styles.iconColor} />
        </figure>
      </div>

      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
        <figure className={styles.defaultStyles}>
          <SiTailwindcss
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </figure>
        <figure className={styles.defaultStyles}>
          <SiRadixui className={styles.iconStyles} color={styles.iconColor} />
        </figure>

        <figure className={styles.defaultStyles}>
          <SiMongodb className={styles.iconStyles} color={styles.iconColor} />
        </figure>
        <figure className={styles.defaultStyles}>
          <SiGit className={styles.iconStyles} color={styles.iconColor} />
        </figure>
      </div>
    </section>
  );
};

export default TechStack;
