import ppdb from "../../assets/images/Sekolah/ppdb.png";
import DaunBackground from "../../components/DaunBackground";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function PPDB() {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative overflow-hidden">
        <DaunBackground></DaunBackground>
        <div className="bg-green-jumbotron flex justify-center items-center z-10">
          <img className="w-100 md:w-1/3 pt-24" src={ppdb} loading="lazy" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
