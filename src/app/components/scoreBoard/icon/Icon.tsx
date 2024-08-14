import styles from "../../../page.module.scss";
import classNames from "classnames";
import React from "react";

// prettier-ignore
interface IconProps {
  src: string; 
  alt: string;
  buttonClass?: string;
  iconClass?: string;
  value: string;
  onClick: (value: string) => void;
}

const Icon: React.FC<IconProps> = ({ src, alt, buttonClass, iconClass, value, onClick }) => {
  return (
    <button className={classNames(styles.btn, buttonClass)} onClick={() => onClick(value)} value={value}>
      <div className={classNames(styles.iconWrapper, iconClass)}>
        <div className={styles.iconContainer}>
          <img src={src} alt={alt} aria-label={alt} />
        </div>
      </div>
    </button>
  );
};

export default Icon;
