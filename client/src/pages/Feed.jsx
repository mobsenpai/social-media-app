import Post from "../components/Post";
import Share from "../components/Share";
import { useEffect, useState } from "react";
// axios
import { getTimeline } from "../services/api";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const handlePosts = async () => {
    try {
      const testUserId = "6a46adec4ddc5b19055300ba";
      const response = await getTimeline(testUserId);
      setPosts(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  if (error) {
    // this will return
    // leaving the actual return which is below not run in case of error
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-full min-w-full p-8 flex flex-col gap-4 bg-canvas overflow-hidden">
      {/* Same reason to use min-h and min-w instead of h- and w- as the sidebar background color problem */}
      <Share />
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
}
