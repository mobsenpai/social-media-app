import Post from "../components/Post";
import Share from "../components/Share";
import { useEffect, useState } from "react";
// axios
import { getTimeline } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuth } from "../context/AuthContext";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const handlePosts = async () => {
    try {
      setLoading(true); // its already true, but kept here for safety, in future if we make a refresh button...
      const response = await getTimeline(user._id);
      setPosts(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
}
