import PohonBackground from "../../../../components/PohonBackground";

export default function Kontak() {
  return (
    <>
      <div id="kontak" className="kontak bg-green-latte text-white p-10 sm:p-16 lg:p-20 flex flex-col md:flex-row justify-center items-center relative overflow-hidden gap-2 md:gap-10">

        <PohonBackground></PohonBackground>

        {/* Lokasi */}
        <div className="location w-full max-w-sm z-10 mb-8 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.36088920686!2d108.49532405969565!3d-6.660910059811708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1735889836029!5m2!1sid!2sid"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-8 border-green-backg"
          ></iframe>
        </div>

        {/* Kontak */}
        <div className="headKontak w-full max-w-lg text-center md:text-left z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-5 font-bold">
            Kontak
          </h2>
          <div className="text-base sm:text-lg lg:text-xl mb-5 flex flex-col gap-3">
            <p>
              <span className="font-medium">Facebook:</span> RA Muta'allimin
            </p>
            <p>
              <span className="font-medium">WhatsApp:</span> 0852 2475 7085
            </p>
            <p>
              <span className="font-medium">Alamat:</span> Jalan Moh Ramdhan,
              RT.8/RW.2, Desa Pangkalan, Blok Pamengger, Kecamatan Plered,
              Kabupaten Cirebon, Jawa Barat 45154
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
