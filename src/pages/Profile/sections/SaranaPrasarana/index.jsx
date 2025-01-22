import BungaBackground from "../../../../components/BungaBackground";
import Carrousel from "../../../../components/Carrousel";
import { dataSarana } from "../../../../data/DataSarana";

export default function SaranaPrasarana() {
  return (
    <>
      <div className="motto bg-yellow-mellow py-8 p-6 sm:p-8 md:p-10 text-black relative overflow-hidden">
        {/* bunga background */}
        <BungaBackground />

        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 sm:mb-10 lg:mb-12">
          Sarana dan Prasarana
        </h2>

        <Carrousel data={dataSarana} colorTextPoint="black" />
      </div>
    </>
  );
}
