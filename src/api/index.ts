import {Candidate} from "../types/candidate";

import dandidatesJson from "./candidates.json";

export default {
  candidates: {
    list: (): Promise<Candidate[]> => {
      if (dandidatesJson) {
        return Promise.resolve(dandidatesJson) as Promise<Candidate[]>;
      } else {
        return Promise.resolve([]);
      }
    },
  },
};
