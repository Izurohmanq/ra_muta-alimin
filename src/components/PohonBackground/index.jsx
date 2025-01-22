import Pohon from "../../assets/images/logos/pohon.svg";

export default function PohonBackground() {
  return (
    <>
      {/* Gambar Dekorasi Kiri */}
      <img
        src={Pohon}
        alt="Dekorasi Kiri"
        className="absolute -bottom-6 md:-bottom-28 -left-8 md:-left-20 w-2/3 md:w-2/6 sm:block z-0"
        loading="lazy"
      />

      {/* Gambar Dekorasi Kanan */}
      <img
        src={Pohon}
        alt="Dekorasi Kanan"
        className="absolute rotate-180 -top-24 md:-top-28 -right-20 md:-right-20 md:w-2/6 sm:block z-0"
        loading="lazy"
      />
    </>
  );
}
