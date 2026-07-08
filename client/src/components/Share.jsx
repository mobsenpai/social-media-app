import { Diversity1 } from "@mui/icons-material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import SendIcon from "@mui/icons-material/Send";

export default function Share() {
  return (
    <div className="shadow-md p-5 rounded-md flex flex-col gap-5 bg-primary text-canvas">
      <div className="flex gap-4">
        <img
          src=""
          alt="profile picture"
          className="w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <input
          type="text"
          placeholder="Whats on your mind?"
          className="outline-none w-full placeholder:text-canvas/50"
        />
      </div>

      <hr className="w-full text-secondary" />

      <div className="flex justify-between">
        <div className="cursor-pointer hover:text-canvas/80 transition duration-300">
          <PermMediaIcon />
          <span className="px-2">Photo or video</span>
        </div>

        <button className="bg-canvas text-primary rounded-md shadow-md cursor-pointer hover:bg-canvas/80 transition duration-300">
          <span className="px-2">Share</span>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
