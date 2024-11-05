/* eslint-disable react/prop-types */
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

export const PlaceBid = (props) => {
  //    const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-4 py-2 rounded-full text-xs">
          Bid
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
            {/* <div className="flex flex-col gap-y-2">
              <label htmlFor="auctionId" className="text-gray-700">
                Auction Id
              </label>
              <Input
                id="auctionId"
                name="auctionId"
                type="number"
                placeholder="Enter Auction Id"
              />
            </div> */}
            <div className="flex flex-col gap-y-2">
              <label htmlFor="amount" className="text-gray-700">
                Bid Amount
              </label>
              <Input
                id="amount"
                name="amount"
                type="number"
                value={props.value}
                onChange={props.onChange}
                autoComplete="off"
                placeholder="Enter Bid Amount"
              />
            </div>
            <DialogClose
              type="button"
              onClick={props.onClick}
              disabled={props.disabled}
              className="w-full max-w-[353px] mx-auto text-white bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full text-base"
            >
              Place Bid
            </DialogClose>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
