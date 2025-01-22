export default function CardMotto({logoMotto, titleMotto, descMotto}) {
  return (
    <>
      <div className="relative text-center">
        <div className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2">
          <img
            className="w-20 sm:w-20 md:w-24"
            src={ logoMotto }
            alt="Moon and Star"
            loading="lazy"
          />
        </div>
        <div className="card1 bg-white w-64 h-72 sm:w-[250px] sm:h-[280px] md:w-[268px] md:h-[308px] flex flex-col justify-center items-center px-8 md:p-8 rounded-lg shadow-2xl">
          <h3 className="text-base md:text-lg font-bold ">{ titleMotto }</h3>
          <p className="text-xs mt-3">
            { descMotto }
          </p>
        </div>
      </div>
    </>
  );
}
