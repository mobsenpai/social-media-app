import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <form className="flex items-center">
      <input
        type="text"
        placeholder="Search for a person or post"
        className="outline-none bg-secondary text-primary rounded-l-md px-3 py-1 placeholder:text-canvas/50 w-xs text-center"
      />

      <button className="bg-surface text-canvas rounded-r-md px-1 py-1 cursor-pointer">
        <SearchIcon />
      </button>
    </form>
  );
}
