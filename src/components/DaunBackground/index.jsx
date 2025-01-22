import Daun from "../../assets/images/logos/daun.svg";

export default function DaunBackground() {
  return (
    <>
      <img
        src={Daun}
        alt="Daun"
        className="absolute -bottom-10 left-0 w-2/3 sm:w-40 md:w-60 lg:w-72 z-0"
        loading="lazy"
      />
      <img
        src={Daun}
        alt="Daun"
        className="absolute rotate-180 -top-10 right-0 w-2/3 sm:w-40 md:w-60 lg:w-72 z-0"
        loading="lazy"
      />
    </>
  );
}
