import styles from "../../../page.module.scss";
import classNames from "classnames";
import React from "react";

// prettier-ignore
interface IconProps { src: React.FC<React.SVGProps<SVGSVGElement>>; alt: string; buttonClass?: string; iconClass?: string; }

const Icon: React.FC<IconProps> = ({ src: SvgIcon, alt, buttonClass, iconClass }) => {
  return (
    <button className={classNames(styles.btn, buttonClass)}>
      <div className={classNames(styles.iconWrapper, iconClass)}>
        <div className={styles.iconContainer}>
          <SvgIcon aria-label={alt} />
        </div>
      </div>
    </button>
  );
};

export default Icon;
