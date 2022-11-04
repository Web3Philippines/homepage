export default function Footer() {
  return (
    <footer className="w-screen bg-black-pearl p-24">
      <section className="flex h-[10vh] w-full items-center justify-between">
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
      </section>

      <section className="flex w-full justify-between">
        <span>&#169; 2022 Web3 Philippines, All Rights Reserved.</span>

        <span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
        </span>
      </section>
    </footer>
  );
}
