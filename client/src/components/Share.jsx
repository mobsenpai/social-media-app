import { Diversity1 } from "@mui/icons-material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import SendIcon from "@mui/icons-material/Send";
import { useAuth } from "../context/AuthContext";
import { createPost } from "../services/api";
import { useState } from "react";

export default function Share({ onShare }) {
  const { user } = useAuth();
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShare = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!desc) {
      setError("Please write something first");
      return;
    }

    try {
      await createPost({
        userId: user._id,
        username: user.username,
        desc: desc.trim(),
        profilePicture: user.profilePicture || "",
      });

      // clear description
      setDesc("");

      // call onShare function
      onShare();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-md p-5 rounded-md flex flex-col gap-5 bg-primary text-canvas">
      <div className="flex gap-4">
        <img
          src={user.profilePicture || ""}
          alt="profile picture"
          className="w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Whats on your mind?"
          className="outline-none w-full placeholder:text-canvas/50"
        />
      </div>

      <hr className="w-full text-secondary" />

      {/* Error message */}
      {error && <div className="text-red-500 text-sm">{error}</div>}

      <div className="flex justify-between">
        <div className="cursor-pointer hover:text-canvas/80 transition duration-300">
          <PermMediaIcon />
          <span className="px-2">Photo or video</span>
        </div>

        <button
          type="submit"
          onClick={handleShare}
          disabled={loading}
          className="bg-canvas text-primary rounded-md shadow-md cursor-pointer hover:bg-canvas/80 transition duration-300"
        >
          <span className="px-2">Share</span>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
