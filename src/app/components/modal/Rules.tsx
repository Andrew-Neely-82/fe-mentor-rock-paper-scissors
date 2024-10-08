import RulesIcon from "@/../public/image-rules.svg";
import CloseIcon from "@/../public/icon-close.svg";
import styles from "@/app/styles/rules.module.scss";
import React from "react";

// prettier-ignore
interface RulesProps { closeModal: () => void; }

const Rules: React.FC<RulesProps> = ({ closeModal }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
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
      </div>
    </div>
  );
};

export default Rules;
