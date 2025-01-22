import BungaBackground from "../../../../components/BungaBackground";
import { dataMotto } from "../../../../data/DataMotto";
import CardMotto from "../../../../components/CardMotto";

export default function Motto() {
  return (
    <>
      <div className="motto bg-yellow-mellow py-8 p-6 sm:p-8 md:p-10 text-black relative overflow-hidden">
        
        <BungaBackground></BungaBackground>
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Motto
        </h2>

        <div className="cardMotto mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-16 md:gap-7 pt-5">
          {/* Card 1 */}
          {dataMotto.map((item)=> {
            return(
              <div key={item.id}>
                <CardMotto {...item}/>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
