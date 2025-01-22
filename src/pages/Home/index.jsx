import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Jumbotron from "./sections/Jumbotron";
import KegiatanSekolah from "./sections/Kegiatan";
import Kontak from "./sections/Kontak";
import Motto from "./sections/Motto";
import Sejarah from "./sections/Sejarah";
import Statistik from "./sections/Statistik";

export default function HomePage () {
    return (
        <>
            <Navbar></Navbar>
            <Jumbotron></Jumbotron>
            <Motto></Motto>
            <Sejarah></Sejarah>
            <KegiatanSekolah></KegiatanSekolah>
            <Statistik></Statistik>
            <Kontak></Kontak>
            <Footer></Footer>
        </>
    )
}