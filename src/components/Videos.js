import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMoreVideos } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMoreVideos}
          loading="loading ..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div> No Data Found! </div>}
      {error && <div>{error}</div>}
      {loading && <div> Loading </div>}
    </div>
  );
};

export default Videos;
