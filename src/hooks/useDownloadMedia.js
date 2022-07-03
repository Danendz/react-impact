import { useState } from "react";
import { downloadMediaContent } from "../Components/Helpers/downoloadMediaContent";
import { useFetching } from "./useFetching";

export const useDownloadMedia = (media) => {
  const [downloadedVids, setDownloadedVids] = useState([]);
  const [fetchMedia, isLoading] = useFetching(async () => {
    const downVids = [];
    for (let i = 0; i < media.length; i++) {
      const vid = await downloadMediaContent(media[i]);
      downVids.push(vid);
    }
    setDownloadedVids(downVids);
  });
  
  return [fetchMedia, isLoading, downloadedVids];
};
