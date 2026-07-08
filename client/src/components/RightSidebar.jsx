import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function RightSidebar() {
  return (
    <div className="p-4 min-h-full bg-surface text-canvas flex flex-col gap-4">
      <h2 className="text-center text-lg underline">
        Celebrating birthdays today!
      </h2>
      <div className="flex items-center gap-2">
        <CardGiftcardIcon />
        <p>John Doe's birthday is today!</p>
      </div>

      <hr className="w-full text-secondary my-4" />

      <h2 className="text-center text-lg underline">Online Friends</h2>

      <div className="flex gap-2 items-center">
        <img
          src=""
          alt="Profile image"
          className="h-8 w-8 rounded-full object-cover bg-canvas"
        />
        <span>John Doe</span>
        <span className="font-bold">Online</span>
      </div>
    </div>
  );
}
