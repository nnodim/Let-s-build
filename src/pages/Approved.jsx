import { logo1 } from "@/assets";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { BaseError, useAccount, useWriteContract, useDisconnect, useReadContract } from "wagmi";
import { tokenAbi, tokenCA } from "@/constants/ABI/tokenContracts";
import { nebulaXAbi, nebulaXCa } from "@/constants/ABI/nebulaXcontracts";

export const Approved = () => {
  const navigate = useNavigate();

  // console.log("tokenAbi:", tokenAbi);

  const [tokenAmount, setTokenAmount] = useState("");

  function handleChange(evt) {
    const value = evt.target.value;
    setTokenAmount(value);
  }

  const { disconnect } = useDisconnect();

  const { address: userWalletAddress, isConnected } = useAccount();

  const { data: isAuthorized } = useReadContract({
    address: nebulaXCa,
    abi: nebulaXAbi,
    functionName: "authorizedAddresses",
    args: [userWalletAddress],
  });

  // useEffect(() => {
  //   if (isAuthorized) {
  //     navigate(`/dashboard`);
  //   }
  // }, [isAuthorized, navigate]);

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  // const tokenCA = import.meta.VITE_TOKEN_CA;
  function approve() {
    if (isAuthorized) {
      return navigate(`/dashboard`);
    } else {     
      writeContract({
        address: tokenCA,
        abi: tokenAbi,
        functionName: "approve",
        args: [userWalletAddress, tokenAmount],
      });
    }
  }

  useEffect(() => {
    if (isConnected) {
      if (hash) {
        navigate(`/kyc`);
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
                Enter Amount you want to approve!
              </label>
              <Input
                type="text"
                id="amount"
                value={tokenAmount}
            onChange={handleChange}
            placeholder="1000000"
            autoComplete="off"
                className="w-full text-[#000000] max-w-[442px] py-3 px-4 border border-[#D9D9D9]"
              />
            </div>
            <Button
          disabled={isPending || !tokenAmount}
              type="button"
              onClick={approve}
              className="w-full max-w-[353px] bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full"
            >
              Approve
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
