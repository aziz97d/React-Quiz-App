import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function useAnswers(videoId) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    async function fetchAnswers() {
      // Database related work
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoId + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(answerQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchAnswers();
  }, [videoId]);

  return {
    loading,
    error,
    answers,
  };
}
