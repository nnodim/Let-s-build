import React, { useEffect } from "react";
import { logo1 } from "@/assets";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { BaseError, useAccount, useWriteContract, useReadContract, useDisconnect } from "wagmi";
import { nebulaXAbi, nebulaXCa } from "@/constants/ABI/nebulaXcontracts";

export const Kyc = () => {
  const navigate = useNavigate();

  const { disconnect } = useDisconnect();
  
  const { address: userWalletAddress, isConnected } = useAccount();

  const { data: isVerified } = useReadContract({
    address: nebulaXCa,
    abi: nebulaXAbi,
    functionName: "kycVerified",
    args: [userWalletAddress],
  });

  useEffect(() => {
    if (isVerified) {
      navigate(`/dashboard`);
    }
  }, [isVerified, navigate]);

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  function verifyKyc() {
    writeContract({
      address: nebulaXCa,
      abi: nebulaXAbi,
      functionName: "verifyKYC",
      args: [userWalletAddress, 1],
    });
  }

  useEffect(() => {
    if (isConnected) {
      if (hash) {
        navigate(`/verify-wallet`);
      }
    } else {
      navigate(`/`);
    }
  }, [isConnected, hash, navigate]);

  useEffect(() => {
    if (error) {
      alert((BaseError).shortMessage || error.message);
    }
  }, [error]);

 return (
   <main className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/v1730744343/let%27s%20do%20it/kd7pdo2obhwxfpxlgcra.jpg')] h-screen bg-no-repeat bg-cover bg-blend-multiply relative">
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
       <div className="w-full flex items-center justify-center h-[calc(100vh-100px)]">
     <form className="relative z-10 flex flex-col items-center justify-between gap-10 w-full">
       <h1 className="bg-[#2C398EA1] w-full max-w-[324px] text-center py-4 rounded-full font-semibold text-white">
         Kyc Verification
       </h1>
       <div className="flex flex-col text-white items-center justify-center gap-3 w-full max-w-[634px]">
         <div className="border-3 border-[#fff] bg-[#93b7be52] text-[#fff] p-5">
           <p>{userWalletAddress}</p>
         </div>
       </div>
       <Button
         type="button"
         onClick={verifyKyc}
         disabled={isPending}
         className="w-full max-w-[353px] bg-[#2C398EBD] hover:bg-[#2C398EBD]/70 h-auto px-10 py-5 rounded-full"
       >
         Verify Kyc
       </Button>

       <Button
         // disabled={isPending || !tokenAmount}
         type="button"
         onClick={() => disconnect()}
         className="w-full max-w-[353px] bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full"
       >
         Disconnect wallet
       </Button>
       </form>
       </div>
      </div>
   </main>
 );
}
