import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { coinBase, kepler, logo1, metamask, walletConnect } from "@/assets";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const wallets = [
  {
    name: "Metamask",
    icon: metamask,
  },
  {
    name: "WalletConnect",
    icon: walletConnect,
  },
  {
    name: "Coinbase",
    icon: coinBase,
  },
  {
    name: "Kepler",
    icon: kepler,
  },
];

export const ConnectWalletModal = () => {
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#161E53] h-auto rounded-[15px] text-5xl font-bold px-10 py-4">
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="sr-only">connect wallet</DialogTitle>
          <DialogDescription className="sr-only">
            Connect your wallet to explore new possibilities.
          </DialogDescription>
          <div className="flex flex-col items-center justify-center gap-8">
            <img src={logo1} className="rounded-full h-20 w-20" alt="" />
            <h2 className="text-3xl font-mono font-bold">Connect to NebulaX</h2>
          </div>

          <div className="flex flex-col gap-5">
            {wallets.map((wallet) => (
              <Button
                onClick={() => navigate(`/verify-wallet`)}
                key={wallet.name}
                className="flex items-center justify-between gap-10 bg-[#F1F0F3] rounded-md text-black hover:bg-[#F1F0F3]/80 h-auto py-4 px-10"
              >
                <span className="flex items-center justify-center gap-4">
                  <img src={wallet.icon} className="h-6 w-6" alt="" />
                  {wallet.name}
                </span>
                <ArrowRight />
              </Button>
            ))}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
