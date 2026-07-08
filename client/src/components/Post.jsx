import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NotesIcon from "@mui/icons-material/Notes";

export default function Post({ post }) {
  return (
    <div className="shadow-md text-surface bg-secondary p-4 flex flex-col gap-2 justify-around rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={post.profilePicture}
            alt="profile img"
            className="h-8 w-8 rounded-full object-cover bg-surface"
          />
          <h3 className="font-bold text-lg">{post.username}</h3>
          <span className="text-xs">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
        <span className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-panel text-center transition duration-300">
          <MoreVertIcon />
        </span>
      </div>

      <div>
        <p>{post.desc}</p>
        {/* Only show image if it exists */}
        {post.img && (
          <img
            src={post.img}
            alt="post image"
            className="max-h-80 object-contain"
          />
        )}
      </div>

      <div className="flex justify-between">
        <div>
          <ThumbUpIcon />
          <span className="px-2">{post.likes?.length || 0} people like it</span>
        </div>
        <div>
          <NotesIcon />
          <span>0 comments</span>
        </div>
      </div>
    </div>
  );
}
