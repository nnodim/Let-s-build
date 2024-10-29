import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const Minting = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-bg1 h-screen bg-no-repeat bg-cover bg-blend-multiply relative flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <form className="relative z-10 flex flex-col items-center justify-between gap-10 w-full">
        <h1 className="text-4xl/[48px] font-bold text-white">
          Approved Amount
        </h1>
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

          <p className="mt-3">
            Please ensure the entered amount meets the approved limit.
          </p>
        </div>
        <Button
        type='button'
          onClick={() => navigate(`/kyc`)}
          className="w-full max-w-[353px] bg-[#090B1B] hover:bg-[#090B1B]/70 h-auto px-10 py-5 rounded-full"
        >
          Mint Now
        </Button>
      </form>
    </main>
  );
};
