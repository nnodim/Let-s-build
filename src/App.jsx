import React, { useEffect } from "react";
import { logo1 } from "./assets";
import { useNavigate } from "react-router-dom";
// import { ConnectWalletModal } from "./components/ConnectWalletModal";
import { useConnect, useAccount} from 'wagmi';
import { injected } from 'wagmi/connectors'
import { Button } from "./components/ui/button";
// import { nebulaXAbi, nebulaXCa } from "./constants/ABI/nebulaXcontracts";


function App() {
  const navigate = useNavigate();
  // const { connectors, connect } = useConnect();
  const { connect } = useConnect();
  const { address: userWalletAddress, } = useAccount();

  // const { data: isAuthorized } = useReadContract({
  //   address: nebulaXCa,
  //   abi: nebulaXAbi,
  //   functionName: "authorizedAddresses",
  //   args: [userWalletAddress],
  // });

  
  // console.log("isAuthorized:", isAuthorized);

  // useEffect(() => {
  //   if (userWalletAddress) {
  //     if (isAuthorized) {
  //       return navigate(`/dashboard`);
  //     } else {
  //       return navigate(`/approved`);
  //     }
  //   }
  // }, [userWalletAddress, isAuthorized, navigate]);

  useEffect(() => {
    if (userWalletAddress) {
        return navigate(`/approved`);
    }
  }, [userWalletAddress, navigate]);

  // useEffect(() => {
  //   if (userWalletAddress) {
  //     if (error) {
  //       alert((BaseError).shortMessage || error.message);
  //     }
  //   }
  // }, [error, userWalletAddress]);
  return (
    <>
      <main className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/v1730744343/let%27s%20do%20it/wyckhc98fqfldjgrbmfc.jpg')] h-screen bg-no-repeat bg-cover bg-blend-multiply relative flex justify-center items-center gap-40 text-white font-inter">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-between gap-10">
          <div className="flex items-center justify-between gap-10">
            <img
              src={logo1}
              className="animate-bounce rounded-full h-96 w-96"
              alt=""
            />
            <div className="flex flex-col items-center gap-10 text-center">
              <h2 className="text-4xl/[48px] font-bold">Connect Wallet</h2>
              <p className="text-2xl/[38px] w-full max-w-[500px]">
                Unlock the Future: Connect Your Wallet to Explore New
                Possibilities!
              </p>
            </div>
          </div>
          <div className="w-full max-w-[850px] flex gap-10 justify-between">
            <h1 className="text-7xl/[86px] font-bold">NebulaX</h1>
            {/* <ConnectWalletModal /> */}
            <Button onClick={() => connect({ connector: injected() })} className="bg-[#161E53] h-auto rounded-[15px] text-5xl font-bold px-10 py-4">
              Connect Wallet
            </Button>

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
