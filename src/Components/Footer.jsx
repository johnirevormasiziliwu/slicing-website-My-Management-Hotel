import React from "react";

function Footer() {
  return (
    <div className="bg-[#162034] px-32 py-10">
      <div className="flex gap-5">
        <div className="hotel-citra-megah">
          <h1 className="font-parisiene text-white font-[800] text-[28px] leading-[28px]">
            Hotel Citra Megah
          </h1>
          <p className="font-poppins font-[500] text-[14px] leading-[21px] w-[299px] text-[#C7D2E8] pt-3">
            Hotel Citra Megah, hotel bintang lima terbaik di indonesia dengan
            lokasi yg strategis
          </p>
          <div className="follow-us mt-10">
            <h1 className="font-poppins font-[500] text-[14px] leading-[21px] text-[#C7D2E8]">
              Follow Us
            </h1>
            <div className="social-media flex items-center gap-3 mt-2">
              <a href="">
                <img
                  src="/src/image/social-media/social-media/social-media/facebook.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="/src/image/social-media/social-media/social-media/linkedin.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="/src/image/social-media/social-media/social-media/instagram.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="/src/image/social-media/social-media/social-media/twitter.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
				<div className="nav-items-link flex justify-between gap-32">
					<div className="navigation flex flex-col">
						<h3 className="font-[500] text-[20px] leading-[30px] font-poppins text-[#C7D2E8]">Navigation</h3>
						<a className="font-poppins font-[400] text-[14px] leading-[21px] text-[#C7D2E8]" href="">Help Center</a>
						<a className="font-poppins font-[400] text-[14px] leading-[21px] text-[#C7D2E8]" href="">Careers</a>
						<a className="font-poppins font-[400] text-[14px] leading-[21px] text-[#C7D2E8]" href="">Terms & Conditions</a>
						<a className="font-poppins font-[400] text-[14px] leading-[21px] text-[#C7D2E8]" href="">Privacy Policy</a>
					</div>
					<div className="Recent Post flex flex-col gap-3">
						<h3 className="font-[500] text-[20px] leading-[30px] font-poppins text-[#C7D2E8]">Resent Post</h3>
						<div className="flex items-center gap-3">
							<img src="/src/image/about-us/about1.png" className="w-[52px] h-[52px]" alt="" />
							<p className="font-poppins w-[157px]  font-[500] text-[12px] text-[#C7D2E8]">Menemukan Kesempurnaan dalam Kesenangan Mengin . . .</p>
						</div>
						<div className="flex items-center gap-3">
							<img src="/src/image/about-us/about2.png" className="w-[52px] h-[52px]" alt="" />
							<p className="font-poppins w-[157px]  font-[500] text-[12px] text-[#C7D2E8]">Menjadi Tuan Rumah yang Tepat: Konferensi dan Acara Bisnis di . . .</p>
						</div>
						<div className="flex items-center gap-3">
							<img src="/src/image/about-us/kecantikan.png" className="w-[52px] h-[52px]" alt="" />
							<p className="font-poppins w-[157px]  font-[500] text-[12px] text-[#C7D2E8]">Mengenal Dapur Lezat Hotel Citra Megah: Sebuah Petualangan . . .</p>
						</div>
					</div>
					<div className="Recent Post flex flex-col gap-3">
						<h3 className="font-[500] text-[20px] leading-[30px] font-poppins text-[#C7D2E8]">Contact Us</h3>
						<div className="flex items-center gap-3">
							<img src="/src/image/contact/phone.png"  alt="" />
							<p className="font-poppins   font-[500] text-[12px] text-[#C7D2E8]">1234-567-890</p>
						</div>
						<div className="flex items-center gap-3">
							<img src="/src/image/contact/maps.png"  alt="" />
							<p className="font-poppins   font-[500] text-[12px] text-[#C7D2E8]">hotelcitramegah@gmail.com</p>
						</div>
						<div className="flex items-center gap-3">
							<img src="/src/image/contact/maps.png"  alt="" />
							<p className="font-poppins   font-[500] w-[269px] text-justify text-[12px] text-[#C7D2E8]">jl. Raya Krapyak, Jl. Karanganyar Raya No.RT.05, Karanganyar, Wedomartani, Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584</p>
						</div>
					</div>
				</div>
      </div>
			<div className="mt-8 bg-[#FFFFFF1A] w-full h-[1.5px]" />
			<p className="font-poppins font-[500] text-[14px] leading-[32px] text-center text-[#FFFFFFB2] mt-3">Copyright © 2023 Hotel Citra Megah</p>
    </div>
  );
}

export default Footer;
