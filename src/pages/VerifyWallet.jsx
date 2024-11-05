import React, { useEffect } from "react";
import { logo1 } from "@/assets";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { BaseError, useAccount, useWriteContract, useDisconnect, useReadContract } from "wagmi";
import { nebulaXAbi, nebulaXCa } from "@/constants/ABI/nebulaXcontracts";

export const VerifyWallet = () => {
  const navigate = useNavigate();

  const { disconnect } = useDisconnect();

  const { address: userWalletAddress, isConnected } = useAccount();

  const { data: hash, isPending, error, writeContract } = useWriteContract();

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

  function verifyWalletAddress() {
    writeContract({
      address: nebulaXCa,
      abi: nebulaXAbi,
      functionName: "authorizeAddress",
      args: [userWalletAddress, 1],
    });
  }

  useEffect(() => {
    if (isConnected) {
      if (hash) {
        navigate(`/dashboard`);
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
    <main className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/v1730744343/let%27s%20do%20it/znudkbbjj2qiyxcmlxlb.jpg')] bg-no-repeat bg-cover bg-blend-multiply relative">
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
        <div className="w-full flex items-center justify-center h-[calc(100vh-50px)]">
          <form className="relative z-10 flex flex-col items-center justify-between gap-10 w-full">
            <div className="flex items-center justify-center gap-8 w-full max-w-[634px] p-12 border border-[#CAC4D0] rounded-lg">
              <User className="rounded-full h-14 w-14 bg-white shrink-0" />
              {/* <Input
                placeholder="Enter your wallet address"
                className="w-full max-w-[442px] py-3 px-4 border border-[#D9D9D9]"
              /> */}
          <p className="w-full bg-white max-w-[442px] py-3 px-4 border border-[#D9D9D9]">{userWalletAddress}</p>
            </div>
            <Button
              type="button"
              onClick={verifyWalletAddress}
          disabled={isPending}
              className="w-full max-w-[353px] bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-lg"
            >
              Verify
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
};
