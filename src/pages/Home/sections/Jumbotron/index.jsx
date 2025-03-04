import photoJumbotron from "../../../../assets/images/jumbotron/jumbotron.webp";
import Button from "../../../../components/Button";
import DaunBackground from "../../../../components/DaunBackground";

export default function Jumbotron() {
  return (
    <>
      <div className="jumbotron bg-green-jumbotron text-white mt-20 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row justify-center items-center relative overflow-hidden">
        <DaunBackground></DaunBackground>

        {/* Bagian Teks (Greetings) */}
        <div className="greetings text-center lg:text-left z-10 lg:pr-16">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl w-full lg:w-[427px] leading-snug md:leading-tight">
            Selamat Datang di RA Muta'alimin Kab. Cirebon
          </h1>
          <h2 className="mt-4 sm:mt-5 md:mt-6 lg:mb-8 text-sm sm:text-base md:text-lg w-full lg:w-[558px] leading-relaxed">
            Sekolah yang memiliki motto Religius, Mandiri, dan Pembiasaan yang
            baik terletak pada Jalan Moh Ramdhan, Desa Pangkalan, KAB. CIREBON.
          </h2>
          <div className="mt-6 flex justify-center lg:justify-start">
            <Button text="Hubungi Kami" href="#kontak"/>
          </div>
        </div>

        {/* Bagian Foto */}
        <div className="photo-jumbotron mt-8 lg:mt-0 z-10">
          <img
            className="image w-64 sm:w-72 md:w-80 lg:w-[400px] xl:w-[500px] shadow-lg rounded-lg border-8 border-green-card"
            src={photoJumbotron}
            alt="Jumbotron"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
