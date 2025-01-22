import React, { useState } from "react";

import { dataKegiatan } from "../../../../data/DataKegiatan";
import DaunBackground from "../../../../components/DaunBackground";
import Carrousel from "../../../../components/Carrousel";

const KegiatanSekolah = () => {
  return (
    <div className="bg-green-jumbotron p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      <DaunBackground></DaunBackground>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 lg:mb-12">
        Kegiatan di Sekolah
      </h2>

      <Carrousel data={dataKegiatan} colorTextPoint="white" />
    </div>
  );
};

export default KegiatanSekolah;
