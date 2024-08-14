import styles from "@/app/styles/page.module.scss";
import classNames from "classnames";
import React from "react";

interface IconProps {
  src?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  alt: string;
  buttonClass?: string;
  iconClass?: string;
  value: string;
  onClick: (value: string) => void;
}

const Icon: React.FC<IconProps> = ({ src: SvgIcon, alt, buttonClass, iconClass, value, onClick }) => {
  return (
    <button className={classNames(styles.btn, buttonClass)} onClick={() => onClick(value)} value={value}>
      <div className={classNames(styles.iconWrapper, iconClass)}>
        <div className={styles.iconContainer}>{SvgIcon ? <SvgIcon aria-label={alt} className={styles.test} /> : <svg aria-label={alt} className={styles.test}></svg>}</div>
      </div>
    </button>
  );
};

export default Icon;
