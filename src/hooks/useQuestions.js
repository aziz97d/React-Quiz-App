import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function useQuestions(videoId) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      // Database related work
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [videoId]);

  return {
    loading,
    error,
    questions,
  };
}
