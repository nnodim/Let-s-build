import { logo1 } from "@/assets";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-white grid grid-cols-3 border-y border-[#FFFFFF] relative z-10">
      <div className="flex flex-col items-center justify-center gap-4 px-9 py-6">
        <img src={logo1} className="h-20 w-h-20 rounded-full" alt="" />
        <p className="text-xl font-light">
          Nebulax Africa&#174;s digital marketplace for non-fungible tokens
          (NFTs). Buy, sell, and create digital items.
        </p>
      </div>
      <div className="border-x text-xl font-light border-[#FFFFFF] flex flex-col items-center justify-center gap-4 px-9 py-6">
        <div className="flex flex-col items-start gap-4">
          <p className="font-serif font-bold">Explore</p>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Listed NFTs</Link>
            </li>
            <li>
              <Link to="">Auction</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xl  flex flex-col items-center justify-center gap-4 px-9 py-6">
        <p className="font-serif font-bold">Join Our Weekly Digest</p>
        <p className="font-light">
          Get exclusive updates and promotion directly to your news feed
        </p>
        <ul className="flex gap-4">
          <li>
            <a href="">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="h-10 w-10"
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt="LinkedIn"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
