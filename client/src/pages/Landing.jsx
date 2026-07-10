import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl">
        Welcome to <span className="underline">Loruki</span>
      </h1>
      <p className="text-lg">
        Connect with friends, share your thoughts and discover what's happening
        in the world
      </p>
    </div>
  );
}
