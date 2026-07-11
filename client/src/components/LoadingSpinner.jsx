import loadingGif from "../assets/loading.gif";

export default function Loading() {
  return (
    /* NOTE: using flex-1 removes the dependency of adding height and width to parent element, this will now take the full available space */
    <div className="flex-1 flex items-center justify-center">
      <img src={loadingGif} alt="Loading spinner" className="w-15 h-15" />
    </div>
  );
}
