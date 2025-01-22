import { Link } from "react-router-dom";
import LogoRaMutalamin from "../../assets/images/logos/LogoWhite.png";

export default function Footer() {
  return (
    <>
      <footer>
        {/* Kontainer Utama Footer */}
        <div className="bg-green-jumbotron text-white flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 p-10 sm:p-16 md:p-20 z-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              className="w-40 sm:w-48 md:w-52"
              src={LogoRaMutalamin}
              alt="Logo"
              loading="lazy"
            />
          </div>

          {/* Navigasi */}
          <div className="navigation flex flex-col md:items-start text-left">
            <Link
              to="/"
              className="md:px-3 py-2 rounded-md text-sm md:text-md"
            >
              Beranda
            </Link>
            <Link
              to="/profile"
              className="md:px-3 py-2 rounded-md text-sm md:text-md"
            >
              Profil
            </Link>
            <Link
              to="/ppdb"
              className="md:px-3 py-2 rounded-md text-sm md:text-md"
            >
              PPDB
            </Link>
            <Link
              to="/galery"
              className="md:px-3 py-2 rounded-md text-sm md:text-md"
            >
              Galeri
            </Link>
          </div>

          {/* Kontak */}
          <div className="kontak text-left">
            <div className="text-sm flex flex-col gap-2">
              <p>
                <span className="font-medium">Facebook:</span> RA Muta'allimin
              </p>
              <p>
                <span className="font-medium">WhatsApp:</span> 0852 2475 7085
              </p>
            </div>
          </div>

          {/* Alamat */}
          <div className="alamat text-left max-w-xs text-sm md:text-md">
            <p className="font-bold mb-2">Alamat</p>
            <p>
              Jalan Moh Ramdhan, Rt.8/Rw.2, Desa Pangkalan, blok Pamengger, KAB.
              CIREBON, PLERED, JAWA BARAT, ID, 45154
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-yellow-mellow p-5 text-center">
          <p>Copyright 2025 RA Muta’alimin</p>
        </div>
      </footer>
    </>
  );
}
