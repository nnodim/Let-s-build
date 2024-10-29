import { logo1 } from "./assets";
import { ConnectWalletModal } from "./components/ConnectWalletModal";

function App() {
  return (
    <>
      <main className="bg-bg1 h-screen bg-no-repeat bg-cover bg-blend-multiply relative flex justify-center items-center gap-40 text-white font-inter">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-between gap-10">
          <div className="flex items-center justify-between gap-10">
            <img src={logo1} className="animate-bounce rounded-full h-96 w-96" alt="" />
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
            <ConnectWalletModal />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
