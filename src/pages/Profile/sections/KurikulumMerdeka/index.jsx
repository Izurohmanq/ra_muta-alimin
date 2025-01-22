import KM from "../../../../assets/images/Sekolah/KM.png";
import BungaBackground from "../../../../components/BungaBackground";

export default function KurikulumMerdeka() {
  return (
    <>
      <div className="motto bg-yellow-mellow py-8 p-6 sm:p-8 md:p-10 text-black relative overflow-hidden">
        {/* bunga background */}
        <BungaBackground />

        <div className="kurikulumMerdeka sm:mt-16 md:mt-2 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 pt-5">
          {/* Logo Kurikulum Merdeka */}
          <img
            src={KM}
            alt="Kurikulum Merdeka"
            className="w-52 sm:w-64 md:w-72 lg:w-96"
            loading="lazy"
          />

          {/* Deskripsi Kurikulum */}
          <p className="text-center font-bold text-xs sm:text-base md:text-xl max-w-sm sm:max-w-md lg:max-w-xl">
            Kami menggunakan kurikulum merdeka sebagai pedoman utama dalam
            proses pembelajaran, yang bertujuan untuk memberikan pengalaman
            belajar yang menyenangkan, berpusat pada potensi siswa, serta
            mendukung pengembangan karakter, kreativitas, dan kemampuan berpikir
            kritis.
          </p>
        </div>
      </div>
    </>
  );
}
