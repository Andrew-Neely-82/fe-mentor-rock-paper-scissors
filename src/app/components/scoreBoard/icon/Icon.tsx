import styles from "../../../page.module.scss";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

// prettier-ignore
interface IconProps { src: string; alt: string; buttonClass?: string; iconClass?: string; value: string; onClick: (value: string) => void; }

const Icon: React.FC<IconProps> = ({ src, alt, buttonClass, iconClass, value, onClick }) => {
  return (
    <button className={classNames(styles.btn, buttonClass)} onClick={() => onClick(value)} value={value}>
      <div className={classNames(styles.iconWrapper, iconClass)}>
        <div className={styles.iconContainer}>
          <Image src={src} width={0} height={0} alt={alt} aria-label={alt} unoptimized/>
        </div>
      </div>
    </button>
  );
};

export default Icon;
