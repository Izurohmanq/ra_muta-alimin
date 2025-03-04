import SejarahPhoto from "../../../../assets/images/Sekolah/sekolah.png";
import DaunBackground from "../../../../components/DaunBackground";

export default function SejarahSekolah() {
  return (
    <>
      <div className="sejarah relative bg-green-jumbotron text-white p-10 sm:p-16 md:p-20 overflow-hidden mt-20">
        <DaunBackground></DaunBackground>

        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-8 md:gap-20">
          {/* Bagian Foto */}
          <div className="photo-sejarah flex-shrink-0 z-10">
            <img
              className="image w-64 sm:w-80 md:w-96 rounded-lg shadow-lg"
              src={SejarahPhoto}
              alt="Sejarah"
              loading="lazy"
            />
          </div>

          {/* Bagian Cerita */}
          <div className="cerita w-full sm:w-[400px] md:w-[535px] text-center md:text-left z-10">
            <h2 className="text-4xl">Sejarah RA Muta'alimin</h2>
            <p className="text-center md:text-justify text-base sm:text-lg md:text-xl mt-5 leading-relaxed">
              RA Muta'allimin berdiri sejak tahun 2013 yang terletak di Desa
              Pangakalan Kecamatan Plered Kabupaten Cirebon. Status kepemilikan
              tanah ini milik Yayasan Raudhatul Muta'alimin. Letak gedung
              sekolah sangat strategis, karena berada di pinggir jalan Pangkalan
              Bakung.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
