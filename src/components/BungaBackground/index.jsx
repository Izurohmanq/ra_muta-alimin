import Bunga from "../../assets/images/logos/bunga.svg";

export default function BungaBackground() {
  return (
    <>
      <img
          src={Bunga}
          alt="motto"
          className="absolute -bottom-28 -left-10 w-2/3 md:w-1/5 opacity-50"
          loading="lazy"
        />
        <img
          src={Bunga}
          alt="motto"
          className="absolute rotate-180 -top-28 right-0 w-2/3 md:w-1/5 opacity-50"
          loading="lazy"
        />
    </>
  );
}
