import Sholat from "../assets/images/kegiatan/sholat.webp";
import Akademik from "../assets/images/kegiatan/akademik.webp";
import HafalanSholat from "../assets/images/kegiatan/hafalanSholat.webp";
import HafalanSurat from "../assets/images/kegiatan/hafalanSuratPendek.webp";
import CookingClass from "../assets/images/kegiatan/cookingClass.png";
import OutingClass from "../assets/images/kegiatan/outingClass.webp";
import DoaHarian from "../assets/images/kegiatan/doaHarian.webp";
import MetodeIqro from "../assets/images/kegiatan/metodeIqro.webp";
import MembacaCepat from "../assets/images/kegiatan/membacaCepat.webp";
import Sharing from "../assets/images/kegiatan/sharing.webp";
import HariBesar from "../assets/images/kegiatan/hariBesar.webp";
import Kartini from "../assets/images/kegiatan/kartini.webp";

class Kegiatan {
    constructor(id, photo, title) {
        this.id = id,
        this.photo = photo,
        this.title = title
    }
}

const dataKegiatan = [
    new Kegiatan(1, Sholat, "Praktek Sholat Wajib"),
    new Kegiatan(2, Akademik, "Kegiatan Akademik"),
    new Kegiatan(3, HafalanSholat, "Hafalan Bacaan Shalat Wajib dan Praktek"),
    new Kegiatan(4, CookingClass, "Cooking Class"),
    new Kegiatan(5, OutingClass, "Outing Class"),
    new Kegiatan(6, DoaHarian, "Hafalan Doa Harian dan Asmaul Husna"),
    new Kegiatan(7, HafalanSurat, "Hafalan Surat Pendek dan Surat Pilihan"),
    new Kegiatan(8, MembacaCepat, "Metode Membaca Cepat"),
    new Kegiatan(9, MetodeIqro, "Metode Iqro"),
    new Kegiatan(10, Sharing, "Sharing Is Caring"),
    new Kegiatan(11, HariBesar, "Memperingati Hari Besar Islam"),
    new Kegiatan(12, Kartini, "Kartini Day"),
]

export { dataKegiatan }