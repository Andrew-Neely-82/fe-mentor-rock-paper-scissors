import RulesIcon from "@/../public/svg/image-rules.svg";
import CloseIcon from "@/../public/svg/icon-close.svg";
import styles from "@/app/page.module.scss";
import React from "react";

// prettier-ignore
interface RulesProps { closeModal: () => void; }

const Rules: React.FC<RulesProps> = ({ closeModal }) => {
  return (
    <div className={styles.modalWrapper}>
      <div>
        <h2>RULES</h2>
        <button onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
      <div>
        <RulesIcon />
      </div>
    </div>
  );
};

export default Rules;
