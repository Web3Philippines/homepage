export default function SubCommunities() {
  return (
    <section className="flex w-screen flex-col items-center bg-cover">
      <div className="md:translate-y-24">
        <h1 className="mb-2 text-center font-futura-black text-3xl text-white">
          Web3 Philippines Subcommunities
        </h1>
        <p className="mb-8 text-center text-letters text-white">
          Metaverse of Web3&lsquo;s builders ecosystem
        </p>
      </div>

      {/* DESKTOP */}
      <img
        className="hidden w-full md:block"
        src="assets/home/subcom_desktop.png"
        alt="Subcommunities"
      />
      {/* MOBILE */}
      <img
        className="w-full md:hidden"
        src="assets/home/subcom_mobile.png"
        alt="Subcommunities"
      />
    </section>
  );
}
