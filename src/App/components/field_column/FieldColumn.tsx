import React from "react";

import CandidateCard from "../candidate_card/CandidateCard";

import styles from "./FieldColumn.module.scss";

interface FieldColumnInterface {
  candidates: object[];
  header: string;
}

const FieldColumn = ({candidates, header}: FieldColumnInterface) => {
  function renderCandidateInfo(candidate: any) {
    if (candidate.length > 0) {
      return <CandidateCard candidate={candidate} />;
    } else {
      return (
        <div className={styles.nocandidatescard}>
          <p className={styles.nocandidates}>No hay candidatos</p>
        </div>
      );
    }
  }

  return (
    <div className={styles.column}>
      <p className={styles.columnheader}>{header}</p>
      {renderCandidateInfo(candidates)}
      {header === "Entrevista inicial" && (
        <div>
          <button className={styles.buttonadd}>Agregar candidato</button>
        </div>
      )}
    </div>
  );
};

export default FieldColumn;
