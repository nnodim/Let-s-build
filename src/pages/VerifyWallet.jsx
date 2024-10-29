import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const VerifyWallet = () => {
    const navigate = useNavigate();
  return (
    <main className="bg-bg2 h-screen bg-no-repeat bg-cover bg-blend-multiply relative flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <form className="relative z-10 flex flex-col items-center justify-between gap-10 w-full">
        <div className="flex items-center justify-center gap-8 w-full max-w-[634px] p-12 border border-[#CAC4D0] rounded-lg">
          <User className="rounded-full h-14 w-14 bg-white shrink-0" />
          <Input
            placeholder="Enter your wallet address"
            className="w-full max-w-[442px] py-3 px-4 border border-[#D9D9D9]"
          />
        </div>
        <Button
        type='button'
          onClick={() => navigate(`/approved`)}
          className="w-full max-w-[353px] bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-lg"
        >
          Verify
        </Button>
      </form>
    </main>
  );
};
