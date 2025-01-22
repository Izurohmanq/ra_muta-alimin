export default function CardStatistik({logoStatistik, titleStatistik, totalStatistik}) {
  return (
    <>
      <div className="relative text-center">
        <div className="absolute -top-16 md:-top-14 left-16">
          <img className="w-28" src={ logoStatistik } alt="Siswa" loading="lazy" />
        </div>
        <div className="card1 bg-white w-[239px] h-[200px] md:h-[290px] flex flex-col justify-center items-center p-5 rounded-lg shadow-2xl">
          <h3 className="text-2xl mt-5 font-bold">{ titleStatistik }</h3>
          <p className="text-6xl mt-3">{ totalStatistik }</p>
        </div>
      </div>
    </>
  );
}
