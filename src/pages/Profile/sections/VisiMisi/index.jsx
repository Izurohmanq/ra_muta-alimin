import PohonBackground from "../../../../components/PohonBackground";

export default function VisiMisi() {
  return (
    <>
      <div className="sejarah relative bg-green-latte text-white p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden">
        {/* Gambar Dekorasi Kiri */}
        <PohonBackground />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-black">
          {/* Visi Card */}
          <div className="visi w-full max-w-xs sm:max-w-sm bg-white rounded-lg border-8 border-green-card p-6 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
              Visi
            </h2>
            <p className="text-sm sm:text-base lg:text-xl mt-4 text-center">
              Terbentuknya generasi muslim yang bertaqwa, cerdas, dan mandiri.
            </p>
          </div>

          {/* Misi Card */}
          <div className="misi w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-white rounded-lg border-8 border-green-card p-6 sm:p-8 lg:p-10 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
              Misi
            </h2>
            <ol className="list-decimal text-sm sm:text-base lg:text-xl mt-4 ml-6 sm:ml-8 lg:ml-10">
              <li>Menanamkan cinta pada Allah SWT dan Rasul-Nya.</li>
              <li>Membiasakan berdoa dalam setiap kegiatan.</li>
              <li>Menanamkan semangat untuk belajar dan menuntut ilmu.</li>
              <li>
                Menumbuhkan keceriaan dan kesenangan dalam proses belajar.
              </li>
              <li>Menumbuhkan sikap yang mandiri pada peserta didik.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
