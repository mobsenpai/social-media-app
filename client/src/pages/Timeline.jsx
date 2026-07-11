import Feed from "../components/Feed";
import Share from "../components/Share";
import { useState } from "react";

export default function Timeline() {
  const [shareCount, setShareCount] = useState(0);

  const handleShareCount = () => {
    setShareCount(shareCount + 1);
  };

  return (
    /* since we have two siblings here and change in one wont affect another */
    /* so we are passing a prop which when we hit the share button in share component will change the count and since that count is given as a prop to the feed, the feed will update due to state changed. Its a little hacky, I know! */
    <div className="flex-1 min-h-full p-8 flex flex-col gap-8 bg-canvas">
      <Share onShare={handleShareCount} />
      <Feed key={shareCount} />
    </div>
  );
}
