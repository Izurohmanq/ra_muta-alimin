import Religius from "../assets/images/logos/moon.svg";
import Mandiri from "../assets/images/logos/mandiri.svg";
import Baik from "../assets/images/logos/baik.svg";

class Motto {
  constructor(id, logoMotto, titleMotto, descMotto) {
    (this.id = id),
      (this.logoMotto = logoMotto),
      (this.titleMotto = titleMotto),
      (this.descMotto = descMotto);
  }
}

const dataMotto = [
  new Motto(
    1,
    Religius,
    "Religius",
    "Mengenalkan kepada anak tentang adanya Allah, Rasul, serta cipataan-Nya"
  ),
  new Motto(
    2,
    Mandiri,
    "Mandiri",
    "Menanamkan anak agar terbiasa untuk bersikap mandiri agar siap untuk melanjutkan ke jenjang berikutnya"
  ),
  new Motto(
    3,
    Baik,
    "Pembiasan yang Baik",
    "Menanamkan pembiasaan yang baik dalam kehidupan sehari-hari agar membentuk karakter yang kuat, mengembangkan potensi anak, dan menanamkan komitmen sejak dini."
  ),
];

export { dataMotto };
