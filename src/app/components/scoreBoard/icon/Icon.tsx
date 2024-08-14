import styles from "../../../page.module.scss";
import classNames from "classnames";
import React from "react";

// prettier-ignore
interface IconProps { src: React.FC<React.SVGProps<SVGSVGElement>>; alt: string; buttonClass?: string; iconClass?: string; value: string; onClick: (value: string) => void; }

const Icon: React.FC<IconProps> = ({ src: SvgIcon, alt, buttonClass, iconClass, value, onClick }) => {
  return (
    <button className={classNames(styles.btn, buttonClass)} onClick={() => onClick(value)} value={value}>
      <div className={classNames(styles.iconWrapper, iconClass)}>
        <div className={styles.iconContainer}>
          <SvgIcon aria-label={alt} />
        </div>
      </div>
    </button>
  );
};

export default Icon;
