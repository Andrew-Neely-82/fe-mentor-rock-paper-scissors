import styles from "@/app/styles/footer.module.scss";
import React from "react";

// prettier-ignore
interface FooterProps { onClick: () => void; }

const Footer: React.FC<FooterProps> = ({ onClick }) => {
  const buttonProps = { className: styles.footerButton, onClick: onClick };

  return (
    <footer className={styles.footer}>
      <button {...buttonProps}>RULES</button>
    </footer>
  );
};

export default Footer;
