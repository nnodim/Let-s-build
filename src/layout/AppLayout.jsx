import React, { useEffect } from "react";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccount, useReadContract } from 'wagmi';
import { nebulaXAbi, nebulaXCa } from "@/constants/ABI/nebulaXcontracts";
// import { nebulaXAbi, nebulaXCa } from "./constants/ABI/nebulaXcontracts";

export const AppLayout = () => {
  const navigate = useNavigate();
  const { isConnected, address: userWalletAddress } = useAccount();

  const { data: isAuthorized } = useReadContract({
    address: nebulaXCa,
    abi: nebulaXAbi,
    functionName: "authorizedAddresses",
    args: [userWalletAddress],
  });

  
  useEffect(() => {
    if (!isConnected) {
      navigate(`/`);
    }
  }, [isConnected, navigate]);

  return (
    <>
      <NavBar />
      <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/v1730744343/let%27s%20do%20it/wyckhc98fqfldjgrbmfc.jpg')] min-h-screen bg-no-repeat bg-cover bg-blend-multiply relative text-white font-inter">
        <div className="absolute min-h-screen inset-0 bg-black bg-opacity-60"></div>
        {isAuthorized && <Outlet />}
        <Footer />
      </div>
    </>
  );
};
