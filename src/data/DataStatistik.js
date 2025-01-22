import Siswa from "../assets/images/logos/siswa.svg";
import Guru from "../assets/images/logos/guru.svg";
import Prestasi from "../assets/images/logos/prestasi.svg";

class Statistik {
  constructor(id, logoStatistik, titleStatistik, totalStatistik) {
    (this.id = id),
      (this.logoStatistik = logoStatistik),
      (this.titleStatistik = titleStatistik),
      (this.totalStatistik = totalStatistik);
  }
}

const dataStatistik = [
  new Statistik(
    1,
    Siswa,
    "Total Siswa",
    110
  ),
  new Statistik(
    2,
    Guru,
    "Guru",
    "8"
  ),
  new Statistik(
    3,
    Prestasi,
    "Total Prestasi",
    "4"
  ),
];

export { dataStatistik };
