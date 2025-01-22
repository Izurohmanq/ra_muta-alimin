import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import KegiatanSekolah from "../Home/sections/Kegiatan";
import KurikulumMerdeka from "./sections/KurikulumMerdeka";
import Prestasi from "./sections/Prestasi";
import SaranaPrasarana from "./sections/SaranaPrasarana";
import SejarahSekolah from "./sections/SejarahSekolah";
import VisiMisi from "./sections/VisiMisi";

export default function ProfilePage () {
    return (
        <>
            <Navbar></Navbar>
            <SejarahSekolah></SejarahSekolah>
            <KurikulumMerdeka></KurikulumMerdeka>
            <VisiMisi></VisiMisi>
            <KegiatanSekolah></KegiatanSekolah>
            <SaranaPrasarana></SaranaPrasarana>
            <Prestasi></Prestasi>
            <Footer></Footer>
        </>
    )
}