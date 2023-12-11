import {
  SiGithub,
  SiGooglecloud,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

import Link from "next/link";
import { styles } from "./common-tw-styles";

const ToolStack = () => {
  return (
    <section className="flex flex-col items-center justify-between space-y-4 py-8">
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:space-x-16">
        <Link
          href="https://www.postman.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiPostman className={styles.iconStyles} color={styles.iconColor} />
        </Link>
        <Link
          href="https://cloud.google.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiGooglecloud
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </Link>
        <Link
          href="https://code.visualstudio.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiVisualstudiocode
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </Link>
        <Link
          href="https://github.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.defaultStyles}
        >
          <SiGithub className={styles.iconStyles} color={styles.iconColor} />
        </Link>
      </div>
    </section>
  );
};

export default ToolStack;
