import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content-home">
          <div className="hero-home bg-custom-background-home-hero bg-center bg-cover h-[545px] relative  ">
            <div class="bg-gradient-to-r from-[#162034B2] to-[#16203400] h-[545px] "></div>
            <div className="title-hero absolute top-0 px-32 mt-24 ">
              <h1 className="font-poppins font-[600] text-[48px] leading-[52.8px] text-white">
                Hotel Citra Megah - Nikmati <br /> Pengalaman Menginap <br />{" "}
                yang Luar Biasa
              </h1>
              <p className="font-poppins font-[400] text-white text-[16px] leading-6 mt-8">
                Jadikan Liburan Anda Luar Biasa di Hotel Citra Megah, <br />{" "}
                Dapatkan Kenyamanan dan Pelayanan Terbaik
              </p>
            </div>
            <div className="booking bg-[#1D7C82] w-[1220px] h-[166px] absolute top-[28.5rem] mx-32 rounded-[24px] px-10 py-8 ">
              <h3 className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                Booking Sekarang!
              </h3>
              <div className="item-booking flex justify-between mt-4">
                <select
                  name="room"
                  id="room"
                  className="w-[249px] h-[49px] px-3 font-poppins font-[500] text-[16px] leading-6 text-[#162034] focus:outline-none"
                >
                  <option>Pilih Kamar</option>
                  <option value="standard room">Standard Room</option>
                  <option value="supier room">Superior Room</option>
                  <option value="twin room">Twin Room</option>
                </select>
                <select
                  name="room"
                  id="room"
                  className="w-[169px] h-[49px] px-3 font-poppins font-[500] text-[16px] leading-6 text-[#162034] focus:outline-none"
                >
                  <option>Check In</option>
                  <option value="standard room">Standard Room</option>
                  <option value="supier room">Superior Room</option>
                  <option value="twin room">Twin Room</option>
                </select>
                <select
                  name="room"
                  id="room"
                  className="w-[169px] h-[49px] px-3 font-poppins font-[500] text-[16px] leading-6 text-[#162034] focus:outline-none"
                >
                  <option>Check Out</option>
                  <option value="standard room">Standard Room</option>
                  <option value="supier room">Superior Room</option>
                  <option value="twin room">Twin Room</option>
                </select>

                <select
                  name="room"
                  id="room"
                  className="w-[169px] h-[49px] px-3 font-poppins font-[500] text-[16px] leading-6 text-[#162034] focus:outline-none"
                >
                  <option>Kode Promo</option>
                  <option value="standard room">Standard Room</option>
                  <option value="supier room">Superior Room</option>
                  <option value="twin room">Twin Room</option>
                </select>
                <button className="bg-[#162034] w-[170px] rounded-[18px] font-poppins font-[600] text-[16px] leading-6 text-white">
                  Booking
                </button>
              </div>
            </div>
          </div>  
          <div className="recomended px-32 mt-32">
            <h1 className="font-poppins font-[600] text-[28px] leading-[48px] text-[#162034]">
              Rekomendasi
            </h1>
            <div className="flex items-center">
              <p className="font-poppins font-[400] text-[16px] leading-6 text-[#333F59]">
                Dibawah ini adalah kamar kamar yang kami rekomendasikan <br />{" "}
                untuk anda dan pastinya memiliki kualitas terbaik
              </p>
              <div className="button-arrow flex gap-3 ms-auto">
                <button className="bg-[#162034] w-[45px] h-[33px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="size-5  "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button className="bg-[#162034] w-[45px] h-[33px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="image-recomended flex  justify-between mt-8">
              <div className="image relative">
                <img
                  src="/src/image/recomendend/kamar1.jpg"
                  alt="kamar1"
                  className="w-[300px] h-[200px] rounded-[18px]"
                />
                <span className="absolute top-40 left-20  text-white font-poppins font-[600] text-[20px] leading-[30px]">
                  Standard Room
                </span>
              </div>
              <div className="image relative">
                <img
                  src="/src/image/recomendend/kamar2.jpg"
                  alt="kamar1"
                  className="w-[300px] h-[200px] rounded-[18px]"
                />
                <span className="absolute top-40 left-20  text-white font-poppins font-[600] text-[20px] leading-[30px]">
                  Superior Room{" "}
                </span>
              </div>
              <div className="image relative">
                <img
                  src="/src/image/recomendend/kamar3.jpg"
                  alt="kamar1"
                  className="w-[300px] h-[200px] rounded-[18px]"
                />
                <span className="absolute top-40 left-20  text-white font-poppins font-[600] text-[20px] leading-[30px]">
                  Twin Room
                </span>
              </div>
              <div className="image relative">
                <img
                  src="/src/image/recomendend/kamar4.jpg"
                  alt="kamar1"
                  className="w-[300px] h-[200px] rounded-[18px]"
                />
                <span className="absolute top-40 left-20  text-white font-poppins font-[600] text-[20px] leading-[30px]">
                  Standard Room
                </span>
              </div>
            </div>
          </div>
          <div className="about-us px-32 mt-28 flex gap-32">
            <div className="about-image relative">
              <img
                src="/src/image/about-us/about1.png"
                alt=""
                className="w-[404px] h-[403px]"
              />
              <img
                src="/src/image/about-us/about2.png"
                alt=""
                className="absolute top-60 left-56 w-[224px] h-[223px] "
              />
            </div>
            <div className="description-about">
              <h3 className="font-poppins font-[500] text-[20px] leading-[30px] text-[#1D7C82]">
                About Us
              </h3>
              <h1 className="font-poppins font-[600] text-[#162034] text-[32px] leading-[48px]">
                Selamat Datang di Hotel Citra Megah
              </h1>
              <p className="w-[554px] font-poppins font-[400] text-[16px]">
                Kami adalah hotel mewah dengan layanan yang tak tertandingi dan
                keramahan yang hangat. Dengan lokasi strategis di pusat kota,
                kami menawarkan pengalaman menginap yang tak terlupakan bagi
                para tamu kami. Staf kami yang profesional dan berpengalaman
                siap membantu Anda menjadikan setiap kunjungan Anda menjadi
                istimewa.
              </p>
              <div className="flex justify-between items-center mt-10 ">
                <div>
                  <img
                    src="/src/image/about-us/restaurant.png"
                    alt=""
                    className="mx-auto"
                  />
                  <h3 className="font-poppins font-[600] text-[20px] leading-[30px] text-[#162034]">
                    Restaurant
                  </h3>
                </div>
                <div className="mt-4">
                  <img
                    src="/src/image/about-us/gym.png"
                    alt=""
                    className="mx-auto"
                  />
                  <h3 className="font-poppins font-[600] text-[20px] leading-[30px] text-[#162034]">
                    Restaurant
                  </h3>
                </div>
                <div>
                  <img
                    src="/src/image/about-us/event.png"
                    alt=""
                    className="mx-auto"
                  />
                  <h3 className="font-poppins font-[600] text-[20px] leading-[30px] text-[#162034]">
                    Restaurant
                  </h3>
                </div>
              </div>
              <a
                href="#"
                className="bg-[#162034] text-white px-[20px] py-[10px] w-[127px] h-[44px] gap-[10px] font-poppins font-[500] text-[16px]leading-6 block mt-8"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="why-us bg-custom-background-why-us bg-center bg-cover h-screen mt-52 p-20">
            <h5 className="text-center font-poppins font-[500] text-[20px] leading-[30px] text-[#1D7C82]">
              Why Us
            </h5>
            <h1 className="text-center font-poppins font-[600] text-[32px] leading-[48px] text-[#162034] py-5">
              Apa yang kami tawarkan di hotel ini untuk anda ?
            </h1>
            <div className="item-why-us flex justify-center gap-32 mt-20">
              <div className="bg-[#FFFFFFD9] w-[350px] h-[324px] rounded-[31px] py-8 px-5">
                <div className="w-[55px] h-[55px] bg-[#162034] rounded-full flex items-center mx-auto">
                  <img
                    src="/src/image/about-us/icon/piagam.png"
                    alt=""
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-center text-[#162034] font-poppins font-[600] text-[20px] leading-[30px] pt-8 pb-4">
                  Kualitas Terbaik
                </h3>
                <p className="text-center font-poppins font-[400] text-[16px] leading-6 text-[#333F59]">
                  Kami selalu berkomitmen untuk menyediakan kualitas terbaik
                  dalam segala hal, mulai dari pelayanan hingga fasilitas yang
                  kami tawarkan.
                </p>
              </div>
              <div className="bg-[#FFFFFFD9] w-[350px] h-[324px] rounded-[31px] py-8 px-5">
                <div className="w-[55px] h-[55px] bg-[#162034] rounded-full flex items-center mx-auto">
                  <img
                    src="/src/image/about-us/icon/maps.png"
                    alt=""
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-center text-[#162034] font-poppins font-[600] text-[20px] leading-[30px] pt-8 pb-4">
                  Lokasi yang Strategis
                </h3>
                <p className="text-center font-poppins font-[400] text-[16px] leading-6 text-[#333F59]">
                  Terletak di pusat kota, kami memberikan akses mudah ke
                  tempat-tempat penting, seperti pusat perbelanjaan, restoran,
                  dan atraksi wisata terkenal.
                </p>
              </div>
              <div className="bg-[#FFFFFFD9] w-[350px] h-[324px] rounded-[31px] py-8 px-5">
                <div className="w-[55px] h-[55px] bg-[#162034] rounded-full flex items-center mx-auto">
                  <img
                    src="/src/image/about-us/icon/start.png"
                    alt=""
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-center text-[#162034] font-poppins font-[600] text-[20px] leading-[30px] pt-8 pb-4">
                  Kenyamanan yang Luar Biasa
                </h3>
                <p className="text-center font-poppins font-[400] text-[16px] leading-6 text-[#333F59]">
                  Kamar-kamar kami didesain dengan elegan dan dilengkapi dengan
                  semua fasilitas modern yang Anda butuhkan untuk tinggal yang
                  nyaman.
                </p>
              </div>
            </div>
          </div>
          <div className="popular-rooms px-32 mt-20">
            <div className="title-popular-rooms flex">
              <h1 className="font-poppins font-[600] text-[32px] leading-[48px] text-[#162034]">
                Kamar Terpopuler
              </h1>
              <a
                href="#"
                className="bg-[#162034] px-[20px] py-[10px] rounded-[18px] gap-[10px] font-poppins font-[500] leading-6 text-white ms-auto"
              >
                See More
              </a>
            </div>
            <div className="flex justify-between mt-8">
              <div className="bg-[#F2F2F2] w-[347px] h-[436px] rounded-t-[18px]  ">
                <img
                  src="/src/image/recomendend/kamar1.jpg"
                  className="rounded-t-[18px]"
                  alt=""
                />
                <div className="px-4 mt-5">
                  <h3 className="font-poppins font-[600] text-[20px] leading-[30px] text-[#162034]">
                    Standard
                  </h3>
                  <p className="font-poppins font-[400] text-[16px] leading-6 text-[#162034]">
                    Kenyamanan sederhana dengan fasilitas lengkap.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/users.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/bathub.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/bed.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="amount-booking flex items-center mt-3">
                    <h3 className="font-poppins font-[600] text-[20px] leading-[23.4px] text-[#162034]">
                      400K
                      <span className="font-poppins font-[400] text-[12px] leading-[14.04px] text-[#1D7C82]">
                        /malam
                      </span>
                    </h3>
                    <button className="bg-[#1D7C82] rounded-[5px] px-[18px] py-[8px] font-poppins font-[500] text-[16px] leading-6 text-white ms-auto">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#F2F2F2] w-[347px] h-[436px] rounded-t-[18px]  ">
                <img
                  src="/src/image/recomendend/kamar2.jpg"
                  className="rounded-t-[18px]"
                  alt=""
                />
                <div className="px-4 mt-5">
                  <h3 className="font-poppins font-[600] text-[20px] leading-[30px] text-[#162034]">
                    Superior Room
                  </h3>
                  <p className="font-poppins font-[400] text-[16px] leading-6 text-[#162034]">
                    Ruangan yang lebih luas dengan pemandangan yang indah.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/users.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/bathub.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/bed.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="amount-booking flex items-center mt-3">
                    <h3 className="font-poppins font-[600] text-[20px] leading-[23.4px] text-[#162034]">
                      400K
                      <span className="font-poppins font-[400] text-[12px] leading-[14.04px] text-[#1D7C82]">
                        /malam
                      </span>
                    </h3>
                    <button className="bg-[#1D7C82] rounded-[5px] px-[18px] py-[8px] font-poppins font-[500] text-[16px] leading-6 text-white ms-auto">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#F2F2F2] w-[347px] h-[436px] rounded-t-[18px]  ">
                <img
                  src="/src/image/recomendend/kamar3.jpg"
                  className="rounded-t-[18px]"
                  alt=""
                />
                <div className="px-4 mt-5">
                  <h3 className="font-poppins font-[600] text-[20px] leading-[30px] text-[#162034]">
                    Deluxe Twin Bed
                  </h3>
                  <p className="font-poppins font-[400] text-[16px] leading-6 text-[#162034]">
                    Kenyamanan dengan tempat tidur terpisah.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/users.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/bathub.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src="/src/image/about-us/icon/bed.png" alt="" />
                      <span className="font-poppins font-[500] text-[14px] leading-[19.11px] text-[#162034]">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="amount-booking flex items-center mt-3">
                    <h3 className="font-poppins font-[600] text-[20px] leading-[23.4px] text-[#162034]">
                      400K
                      <span className="font-poppins font-[400] text-[12px] leading-[14.04px] text-[#1D7C82]">
                        /malam
                      </span>
                    </h3>
                    <button className="bg-[#1D7C82] rounded-[5px] px-[18px] py-[8px] font-poppins font-[500] text-[16px] leading-6 text-white ms-auto">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel-service mt-20">
              <h3 className="text-center font-poppins font-[500] text-[20px] leading-[30px] text-[#1D7C82]">
                Hotel Service
              </h3>
              <h1 className="text-center font-poppins font-[600] text-[32px] leading-[48px] text-[#162034]">
                Layanan Hotel Citra Megah
              </h1>
              <div className="flex justify-between mt-8">
                <div>
                  <img src="/src/image/about-us/layanan.png" alt="" />
                  <h3 className="text-center font-poppins font-[500] text-[20px] leading-[30px] text-[#162034] pt-5">
                    Layanan Kamar 24 Jam
                  </h3>
                </div>
                <div>
                  <img src="/src/image/about-us/restoran.png" alt="" />
                  <h3 className="text-center font-poppins font-[500] text-[20px] leading-[30px] text-[#162034] pt-5">
                    Restoran Mewah
                  </h3>
                </div>
                <div>
                  <div className="flex">
                    <img src="/src/image/about-us/kecantikan.png" alt="" />
                    <img src="/src/image/about-us/olahraga.png" alt="" />
                  </div>
                  <h3 className="text-center font-poppins font-[500] text-[20px] leading-[30px] text-[#162034] pt-5">
                    Spa dan Kebugaran
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="fatured bg-[#16203414] mt-32 py-20 px-32">
            <h5 className="text-center font-poppins font-[500] text-[20px] leading-[30px] text-[#1D7C82]">
              Fatured
            </h5>
            <h1 className="text-center font-poppins font-[600] text-[32px] leading-[48px] text-[#162034] py-5">
              Apa Yang Membuat Hotel Kami Sangat Cocok Untuk Anda ?
            </h1>
            <div className="image-featured mt-3 ">
              <div className="flex items-center relative ">
                <img
                  src="/src/image/about-us/featured3.png"
                  className="ml-16"
                  alt=""
                />
                <div className="bg-white w-[594px] h-[305px] rounded-[18px] py-12 px-8 absolute right-20 ">
                  <h1 className="font-parisiene font-[600] text-[28px] leading-[28px] text-[#162034]">
                    Pemandangan kota yang memukau
                  </h1>
                  <p className="font-poppins font-[400] text-[16px] leading-6 text-[#333F59] pt-5">
                    Hotel Citra Megah adalah destinasi yang sempurna bagi Anda
                    yang menginginkan pengalaman menginap dengan pemandangan
                    kota yang memukau. Kami berada di jantung kota, memberikan
                    Anda pemandangan yang spektakuler, memadukan keindahan
                    arsitektur modern dengan lanskap perkotaan yang gemerlap.
                  </p>
                </div>
              </div>
              <div className="flex items-center relative mt-5 ">
                <img
                  src="/src/image/about-us/featured2.png"
                  className="ml-16"
                  alt=""
                />
                <div className="bg-white w-[594px] h-[305px] rounded-[18px] py-12 px-8 absolute right-20 ">
                  <h1 className="font-parisiene font-[600] text-[28px] leading-[28px] text-[#162034]">
                    Lokasi hotel yang strategis
                  </h1>
                  <p className="font-poppins font-[400] text-[16px] leading-6 text-[#333F59] pt-5">
                    Lokasi kami yang strategis merupakan salah satu keunggulan
                    utama. Terletak di pusat kota, Anda akan menemukan diri Anda
                    dikelilingi oleh kehidupan perkotaan yang dinamis. Hanya
                    beberapa langkah dari hotel, Anda dapat menjelajahi atraksi
                    lokal, mengeksplorasi tempat-tempat wisata populer, dan
                    menikmati kehidupan malam yang berwarna.
                  </p>
                </div>
              </div>
              <div className="flex items-center relative mt-5 ">
                <img
                  src="/src/image/about-us/featured1.png"
                  className="ml-16"
                  alt=""
                />
                <div className="bg-white w-[594px] h-[305px] rounded-[18px] py-12 px-8 absolute right-20 ">
                  <h1 className="font-parisiene font-[600] text-[28px] leading-[28px] text-[#162034]">
                    Interior yang elegan dan modern
                  </h1>
                  <p className="font-poppins font-[400] text-[16px] leading-6 text-[#333F59] pt-5">
                    Di Hotel Eleganzia, kami menghadirkan keindahan interior
                    yang elegan dan modern untuk memenuhi selera para tamu yang
                    menghargai sentuhan keanggunan dan kemewahan. Setiap ruangan
                    kami dirancang dengan penuh perhatian terhadap detail,
                    menciptakan atmosfer yang mewah dan memikat. Bersiaplah
                    untuk merasakan pengalaman menginap yang tak terlupakan di
                    lingkungan yang begitu indah dan menginspirasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="facility mt-20  px-32">
            <h5 className="text-center font-poppins font-[500] text-[20px] leading-[30px] text-[#1D7C82]">
              Facility
            </h5>
            <h1 className="text-center font-poppins font-[600] text-[32px] leading-[48px] text-[#162034] py-5">
              Beberapa Fasilitas Hotel Kami
            </h1>
            <div className="flex justify-between mt-5">
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/bed2.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  145 Kamar
                </span>
              </div>
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/restaurant.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  Restaurant
                </span>
              </div>
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/kolamrenang.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  Kolam Renang
                </span>
              </div>
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/mushola.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  Mushola
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/wifi.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  Wifi/Internet
                </span>
              </div>
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/time.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  Layanan 24 jam
                </span>
              </div>
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/laundry.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  Laundry
                </span>
              </div>
              <div className="w-[265px] h-[59px] bg-[#1D7C82] rounded-[18px] flex items-center px-3 gap-3">
                <img src="/src/image/about-us/icon/taxi.png" alt="" />
                <span className="font-poppins font-[500] text-[20px] leading-[30px] text-white">
                  Antar jemput
                </span>
              </div>
            </div>
          </div>
          <div className="galery px-32 mt-20 relative">
            <h1 className="text-center font-poppins font-[600] text-[32px] leading-[48px] ">
              Galeri Kami
            </h1>
            <div className="image-gallery mt-5">
              <div className="image-galery-items-1 flex gap-[72px]">
                <img src="/src/image/galery/image 1.png" alt="" />
                <img src="/src/image/galery/image 3.png" alt="" />
                <img src="/src/image/galery/image 5.png" alt="" />
                <img src="/src/image/galery/image 8.png" alt="" />
              </div>
              <div className="image-galery-items-2 flex gap-[75px] mt-5">
                <img src="/src/image/galery/image 2.png" alt="" />
                <img src="/src/image/galery/image 4.png" alt="" />
                <img src="/src/image/galery/image 6.png" alt="" />
                <img src="/src/image/galery/image 7.png" alt="" />
              </div>
            </div>

            <button className="bg-[#1620344D] px-1.5 py-1.5 left-28 absolute top-[21.4rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-6 font-[800]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="bg-[#1620344D] px-1.5 py-1.5 right-28  absolute top-[21.4rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="bg-[#1D7C82] p-[30px] h-[255px] mt-28 rounded-t-[20px]">
            <p className="text-center  font-poppins w-[934px] h-[108px] mx-auto font-[600] text-[24px] leading-[36px] text-white">
              Jangan lewatkan kesempatan untuk menginap di Hotel Bintang Emas
              dan rasakan pengalaman menginap yang tak terlupakan. Pesan
              sekarang untuk mendapatkan harga spesial dan penawaran terbatas!
            </p>
            <div className="flex justify-center mt-10">
              <button className="bg-[#162034] px-[20px] py-[10px] font-poppins text-white font-[500] text-[16px] leading-6">
                Booking Sekarang!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
