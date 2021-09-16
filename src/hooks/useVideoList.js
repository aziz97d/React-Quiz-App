import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function useVideoList(page) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [videos, setVideos] = useState([]);
  const [hasMoreVideos, setHasMoreVideos] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      // Database related work
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(videoQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMoreVideos(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    //for loading
    setTimeout(() => {
      fetchVideos();
    }, 1000);
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMoreVideos,
  };
}
