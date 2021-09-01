import React from "react";

import styles from "./CandidateCard.module.scss";

const CandidateCard = ({candidate}: any) => {
  console.log(candidate);

  function movePrevious() {
    console.log("Previous");
  }

  function moveNext() {
    console.log("Next");
  }

  return candidate.map((value: any) => (
    <div key={value.id} className={styles.candidateinfo}>
      <div className={styles.headerinfo}>
        <p>{value.name}</p>
        <div>
          <button onClick={movePrevious}>{"<"}</button>
          <button onClick={moveNext}>{">"}</button>
        </div>
      </div>
      {value.comments && <p>{value.comments}</p>}
    </div>
  ));
};

export default CandidateCard;
