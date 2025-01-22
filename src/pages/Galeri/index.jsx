import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PohonBackground from "../../components/PohonBackground";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/462597415_1071663694363979_8659874002104154639_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RIRDCYI2ZLYQ7kNvgE9Hoov&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AesNUy_IyTSJ1N2l4vDcayU&oh=00_AYDlrAUE20p2-Q4UwDpxzlPwHYcLJ45NdjpKLT0_tr-gJg&oe=679658BE",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/470574262_1116684253195256_7981492676102752678_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XKOQuQPT6fUQ7kNvgHsy_Yh&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=ApUqoSwZyOLPiFoOFaSHItT&oh=00_AYDuwVgHeBntRzrz8j7Hjq8Ufcijy7TMhlUQWl3bMrAuqA&oe=67968494",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/470214676_1116471933216488_8821349167453464124_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YM6EdOwcoXgQ7kNvgHbBS21&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AscNtEdeMJIgqLFMXT2ir29&oh=00_AYD2gXEEQ09M3q5ri33Hq3xXSNhiSUMqmuBKNc_2G5q_PA&oe=679677CA",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/468734747_1103085227888492_6100414665144822784_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iEbdS8G0guYQ7kNvgGc3GPu&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AH8ejyc_CDVbpaXrw8NPk1H&oh=00_AYDHBe43tBzZnP0RH4NXIL4OwlLd9xSuCrzCaJeljkIXAQ&oe=67966086",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/468303259_1103084487888566_706807518300037144_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TdkPniUsqUwQ7kNvgE4l3sN&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=A2OCqXG2b4Q8PezcKZiRjkp&oh=00_AYAR4I_r4IdGflEetRxaNe2agMrrSsrNA1Sxn5Ibawaz4Q&oe=679662AC",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/463381877_1072463810950634_5536849061766252580_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p4Pdb5BgsZUQ7kNvgHRonjW&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=ASsPKt5-nGLGSnc55G5isPA&oh=00_AYCx28Ghcub_lMTtWcvOVnW7LVRMiUwNHiKUm8hpqvGDNg&oe=67966D04",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/463786336_1072451004285248_1965960651129018964_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UpUfmgb_rwcQ7kNvgFF_cbK&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=ALYL8eYvZu5YFgZV85cIK4t&oh=00_AYA5ZWPPt3KMes5VZOzIvjiamPsdWOiU8zRT-ou2M13MzQ&oe=67967702",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/461564312_1062130165317332_1439898735622455452_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=M1tntn3UxcAQ7kNvgFViTPZ&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AwBQcwPkGxmkEG6DnLBNNJO&oh=00_AYCRQry5LiX-qVhAkSS6mBK91kD6SKP7rDLaJdAurwUDnA&oe=67966FF1",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/455732344_1031033425093673_7283302629940528675_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TjOQ_EXJbtwQ7kNvgGN4bTb&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AhU-V4aF8BYzTGggTqY34YK&oh=00_AYDGzAn5wBfa3DwHV-GwGXXfMCC5G7GpBlm-hG6rhEsj6A&oe=67966AA6",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/455903691_1031032198427129_4065261200443277610_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zvQhpnDpnqQQ7kNvgH0uRpv&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=ATR-svCyFqrUoJgyTojwOUF&oh=00_AYB6yvDm0_iw6MUAPaqFUQf7cuklPAwvOc0g94AUqFaGbA&oe=679677BF",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/455694946_1030743438456005_2622665577713187176_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4Evkki9TgMUQ7kNvgFmu1hn&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AjX93-udjKbcfi-YeQ_kO8l&oh=00_AYA_3yMu71U3Jgr-Fa6Pgtn_wKqCJYUocD7vHQV9f0Rw6A&oe=6796922F",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/453194833_1019810802882602_8880872211115001131_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dek_GR8z21sQ7kNvgHuTwBo&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AQjW-zR4J-JUibUoPNJsPft&oh=00_AYBecRDw9Y4o-nqQ72e_C_Kvwq1Eo7Pdf4FVDHfJR3TZWw&oe=679674B2",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/448579819_1004637207733295_5056348051354957753_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l2vwHcvm6p8Q7kNvgFBZ8UD&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AvXQFFlQvEaY7YKt-sGxZ5F&oh=00_AYD0e4oPHv7VAQqxu7kGYKxZg9ZsIGiw1-x6sOwjR0t83g&oe=6796617F",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/448150940_989701259226890_1832580044147273558_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l12Dx1Hn128Q7kNvgGQl-w5&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=A3jjFL4u1u2zOTRR-21NDXd&oh=00_AYA8l0xRcblQ-9uLbmwSSkFwGoy-uFxMoFdRk4-WxDTGhw&oe=67965C77",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/448031112_989700905893592_826029638598967752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rwWP-fMmQoQQ7kNvgHdxcPV&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=A62WeG7ty4RcIEraq39xfWH&oh=00_AYARmoZr9XNkuvF2TWmZgWuQ1ySJdZUrokIKe_tNJu6nqA&oe=67968A47",
    "https://scontent.fbdo2-1.fna.fbcdn.net/v/t39.30808-6/426123052_919549319575418_3335221535794642311_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sTRgyRvCaIkQ7kNvgEps5gv&_nc_zt=23&_nc_ht=scontent.fbdo2-1.fna&_nc_gid=AROtjqNCs6nYk9pOJ5b0rpk&oh=00_AYD2NLENW3f27hw7Qc-klnN-uXqdCuTMH4Eo9y5_RMcRsQ&oe=67965F2E",
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="p-4 pt-28 bg-green-latte relative overflow-hidden z-0">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-50">
          {images.map((image, index) => (
            <div className="w-full h-40 overflow-hidden rounded-lg border-8 border-green-card">
              <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                loading="lazy"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 -right-5 text-white text-5xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
