import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { logo1 } from "@/assets";
import { Input } from "./ui/input";

export const AuctionModal = () => {
  //    const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-5 py-2 rounded-full">
          Auction
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
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="tokenId" className="text-gray-700">
                Token Id
              </label>
              <Input
                id="tokenId"
                name="tokenId"
                type="number"
                placeholder="Enter Token Id"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="minBid" className="text-gray-700">
                Minimum Bid
              </label>
              <Input
                id="minBid"
                name="minBid"
                type="number"
                placeholder="Enter Minimum Bid"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="duration" className="text-gray-700">
                Duration
              </label>
              <Input
                id="duration"
                name="duration"
                type="number"
                placeholder="Enter Duration"
              />
            </div>

            <DialogClose
              type="button"
              //   onClick={() => navigate(`/auction`)}
              className="w-full max-w-[353px] mx-auto text-white bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full text-base"
            >
              Auction
            </DialogClose>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
