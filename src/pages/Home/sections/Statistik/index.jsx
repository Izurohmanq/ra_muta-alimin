import Siswa from "../../../../assets/images/logos/siswa.png";
import Bunga from "../../../../assets/images/logos/bunga.svg";
import { dataStatistik } from "../../../../data/DataStatistik";
import CardStatistik from "../../../../components/CardStatistik";
import BungaBackground from "../../../../components/BungaBackground";

export default function Statistik() {
  return (
    <>
      <div className="statistik bg-yellow-mellow p-10 text-black relative overflow-hidden">
        {/* bunga background */}
        <BungaBackground></BungaBackground>

        <h2 className="text-center text-5xl font-bold">Statistik</h2>
        <div className="cardMotto mt-24 flex flex-wrap justify-center items-center gap-24 md:gap-6">
          { dataStatistik.map((item)=> {
            return(
              <div key={item.id}>
                <CardStatistik {...item} />
              </div>
            )
          }) }
        </div>
      </div>
    </>
  );
}
