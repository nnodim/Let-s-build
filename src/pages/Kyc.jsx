import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const Kyc = () => {
 const navigate = useNavigate();
 return (
   <main className="bg-bg4 h-screen bg-no-repeat bg-cover bg-blend-multiply relative flex justify-center items-center">
     <div className="absolute inset-0 bg-black bg-opacity-60"></div>
     <form className="relative z-10 flex flex-col items-center justify-between gap-10 w-full">
       <h1 className="bg-[#2C398EA1] w-full max-w-[324px] text-center py-4 rounded-full font-semibold text-white">
         Kyc Verification
       </h1>
       <div className="flex flex-col text-white items-center justify-center gap-3 w-full max-w-[634px]">
         <label htmlFor="amount">Wallet Address</label>
         <Input
           type="text"
           id="amount"
           placeholder="Enter your wallet address"
           className="w-full max-w-[442px] py-3 px-4 border border-[#D9D9D9]"
         />
       </div>
       <Button
         type="button"
         onClick={() => navigate(`/dashboard`)}
         className="w-full max-w-[353px] bg-[#2C398EBD] hover:bg-[#2C398EBD]/70 h-auto px-10 py-5 rounded-full"
       >
         Verify Kyc
       </Button>
     </form>
   </main>
 );
}
