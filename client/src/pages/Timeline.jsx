import Feed from "../components/Feed";
import Share from "../components/Share";

export default function Timeline() {
  return (
    <div className="flex-1 min-h-full p-8 flex flex-col gap-8 bg-canvas">
      <Share />
      <Feed />
    </div>
  );
}
