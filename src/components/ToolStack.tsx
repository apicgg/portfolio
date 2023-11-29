import {
  SiGooglecloud,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

import { styles } from "../styles/common-tw-styles";

const ToolStack = () => {
  return (
    <section className="flex flex-col items-center justify-between space-y-4 py-8">
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:space-x-16">
        <figure className={styles.defaultStyles}>
          <SiPostman className={styles.iconStyles} color={styles.iconColor} />
        </figure>
        <figure className={styles.defaultStyles}>
          <SiGooglecloud
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </figure>
        <figure className={styles.defaultStyles}>
          <SiVisualstudiocode
            className={styles.iconStyles}
            color={styles.iconColor}
          />
        </figure>
        <figure className={styles.defaultStyles}>
          <SiVercel className={styles.iconStyles} color={styles.iconColor} />
        </figure>
      </div>
    </section>
  );
};

export default ToolStack;
