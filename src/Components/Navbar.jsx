import React from "react";

function Navbar() {
  return (
    <nav className="bg-white py-6 px-32  ">
      <div className="nav-content flex items-center justify-between">
				<h1 className="nav-title font-parisiene font-[800] text-[28px] leading-7 text-[#162034]">Hotel Citra Megah</h1>
				<div className="nav-items flex gap-10">
					<a className="font-poppins font-[600] text-[16px] leading-6 text-[#1D7C82]" href="#">Home</a>
					<a className="font-poppins font-[600] text-[16px] leading-6 text-[#1D7C82]" href="#">Rooms</a>
					<a className="font-poppins font-[600] text-[16px] leading-6 text-[#1D7C82]" href="#">About</a>
					<a className="font-poppins font-[600] text-[16px] leading-6 text-[#1D7C82]" href="#">Blog</a>
					<a className="font-poppins font-[600] text-[16px] leading-6 text-[#1D7C82]" href="#">Contact</a>
				</div>
				<div className="nav-signup">
					<buttonn className="bg-[#162034] text-white py-2.5 px-5 rounded-[18px] items-center font-poppins gap-[10px] font-[500] text-[16px] leading-6 " >Login/Sign Up</buttonn>
				</div>
			</div>
    </nav>
  );
}

export default Navbar;
