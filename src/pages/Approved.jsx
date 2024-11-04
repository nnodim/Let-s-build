import { logo1 } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

export const Approved = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/v1730744343/let%27s%20do%20it/nrqfatghykwojjyxlzge.jpg')] h-screen bg-no-repeat bg-cover bg-blend-multiply relative">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <div className="flex flex-shrink-0 items-center p-4">
          <Link to="/">
            <img
              className="block h-7 md:h-[52px] w-auto rounded-full"
              src={logo1}
              alt="Your Company"
            />
          </Link>
        </div>
        <div className="w-full flex items-center justify-center h-[calc(100vh-85px)]">
          <form className="relative z-10 flex flex-col items-center justify-between gap-10 w-full">
            <div className="flex flex-col text-white items-center justify-center gap-3 w-full max-w-[634px]">
              <label htmlFor="amount">
                Enter Amount you want to you want to mint!
              </label>
              <Input
                type="text"
                id="amount"
                placeholder="Enter your wallet address"
                className="w-full max-w-[442px] py-3 px-4 border border-[#D9D9D9]"
              />
            </div>
            <Button
              type="button"
              onClick={() => navigate(`/mint`)}
              className="w-full max-w-[353px] bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full"
            >
              Approve
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
