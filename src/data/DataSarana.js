import RuangBelajar from "../assets/images/Sarana/ruangBelajar.webp";
import Suasana from "../assets/images/Sarana/suasana.webp";
import limaKelas from "../assets/images/Sarana/5Kelas.webp";
import RuangBermain from "../assets/images/Sarana/ruangBermain.webp";
import MandiBola from "../assets/images/Sarana/mandiBola.webp";
import Perpustakaan from "../assets/images/Sarana/perpustakaan.webp";
import KamarMandi from "../assets/images/Sarana/kamarMandi.webp";
import Kantin from "../assets/images/Sarana/kantin.jpeg";
import BermainLuas from "../assets/images/Sarana/bermainLuas.webp";

class Sarana {
    constructor(id, photo, title) {
        this.id = id,
        this.photo = photo,
        this.title = title
    }
}

const dataSarana = [
    new Sarana(1, RuangBelajar, "Ruang Belajar yang Representative"),
    new Sarana(2, Suasana, "Suasana Belajar yang mMnyenangkan"),
    new Sarana(3, limaKelas, "Terdapat 5 Kelas"),
    new Sarana(4, RuangBermain, "Ruang Bermain"),
    new Sarana(5, MandiBola, "Ruang Mandi Bola"),
    new Sarana(6, Perpustakaan, "Perpustakaan"),
    new Sarana(7, KamarMandi, "Kamar Mandi"),
    new Sarana(8, Kantin, "Kantin"),
    new Sarana(9, BermainLuas, "Tempat Bermain yang Luas"),

]

export { dataSarana }