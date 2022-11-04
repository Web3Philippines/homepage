export default function Navbar() {
  return (
    <nav className="absolute flex h-[10vh] w-screen items-center justify-between py-4 px-8">
      <img
        className="h-[5vh]"
        src="assets/home/w3phl_logo.svg"
        alt="Web3 Philippines Logo"
      />
      <div className="flex h-full items-center">
        <button className="px-4 hover:underline">Home</button>
        <button className="px-4 hover:underline">About</button>
        {/*
        <button className="px-4 hover:underline">Events</button>
        <button className="px-4 hover:underline">Projects</button>
        <button className="px-4 hover:underline">Gallery</button>
        */}
        <button className="px-4 hover:underline">Contacts</button>
      </div>
    </nav>
  );
}
