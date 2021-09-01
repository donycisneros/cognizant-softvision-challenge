import React, {useState, useEffect} from "react";

import FieldColumn from "../../components/field_column/FieldColumn";
import {Candidate} from "../../../types/candidate";
import API from "../../../api";

import styles from "./Dashboard.module.scss";

function Dashboard() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const loadCandidates = API.candidates.list();

    loadCandidates.then((data) => setCandidates(data));
  }, []);

  const initialDashboardData = [
    {id: 0, title: "Entrevista inicial"},
    {id: 1, title: "Entrevista técnica"},
    {id: 2, title: "Oferta"},
    {id: 3, title: "Asignación"},
    {id: 4, title: "Rechazo"},
  ];

  const dashboardData = initialDashboardData.map(({id, title}) => ({
    id: `board-${id}`,
    candidates: candidates.filter(({step}) => step === title),
    header: title,
  }));

  return (
    <main className={styles.dashboard}>
      {dashboardData.map(({id, candidates, header}) => (
        <FieldColumn key={id} candidates={candidates} header={header} />
      ))}
    </main>
  );
}

export default Dashboard;
