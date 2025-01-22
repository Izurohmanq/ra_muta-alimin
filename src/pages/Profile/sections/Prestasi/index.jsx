import PohonBackground from "../../../../components/PohonBackground";

export default function Prestasi() {
  return (
    <>
      <div className="sejarah bg-green-latte text-white p-6 sm:p-10 md:p-16 lg:p-10 relative overflow-hidden z-0">
        {/* Gambar Dekorasi Kiri */}
        <PohonBackground />

        {/* Judul */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 z-10">
          Prestasi
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-black">
          {/* Prestasi Sekolah */}
          <div className="visi w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg border-8 border-green-card p-6 z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-4">
              Sekolah
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-justify">
              Juara 1 lomba sekolah sehat tingkat kecamatan Cirebon tahun 2016
            </p>
          </div>

          {/* Prestasi Siswa/Siswi */}
          <div className="misi w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-lg border-8 border-green-card p-6 sm:p-8 lg:p-10 z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-4">
              Siswa/Siswi
            </h2>
            <ol className="list-decimal ml-4 sm:ml-6 lg:ml-8 text-sm sm:text-base lg:text-lg text-justify">
              <li>
                Juara harapan 1 kategori wanita lomba peragaan busana adat
                nusantara peringatan hari besar nasional kecamatan Plered 2023
              </li>
              <li>
                Juara harapan 1 lomba mewarnai goody bag kelompok A putri
                kecamatan Plered
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
