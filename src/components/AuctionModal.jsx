/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
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
import { BaseError, useWriteContract } from "wagmi";
import { nebulaXAbi, nebulaXCa } from "@/constants/ABI/nebulaXcontracts";

export const AuctionModal = (props) => {
  //    const navigate = useNavigate();
  const [selectedTokenId, setSelectedTokenId] = useState();

  const [auctionDetails, setAuctionDetails] = useState({
    minBidAmount: '',
    durationInMins: ''
  })

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setAuctionDetails((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }
  const { data: hash, isPending, error, writeContract } = useWriteContract();

  function auction(tokenId) {
    // alert(`${tokenId}, ${auctionDetails.minBidAmount}, ${auctionDetails.durationInMins}`);
    setSelectedTokenId(tokenId);
    writeContract({
      address: nebulaXCa,
      abi: nebulaXAbi,
      functionName: "createAuction",
      args: [tokenId, auctionDetails.minBidAmount, auctionDetails.durationInMins],
    });
  }

  useEffect(() => {
    if (hash) {
      alert("Auction Successful");
    }
  }, [hash]);

  useEffect(() => {
    if (error) {
      alert((BaseError).shortMessage || error.message);
    }
  }, [error]);

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
            {/* <div className="flex flex-col gap-y-2">
              <label htmlFor="tokenId" className="text-gray-700">
                Token Id
              </label>
              <Input
                id="tokenId"
                name="tokenId"
                type="number"
                placeholder="Enter Token Id"
              />
            </div> */}
            <div className="flex flex-col gap-y-2">
              <label htmlFor="minBid" className="text-gray-700">
                Minimum Bid
              </label>
              <Input
                id="minBid"
                onChange={handleChange}
                value={auctionDetails.minBidAmount}
                name="minBidAmount"
                type="number"
                placeholder="Enter Minimum Bid"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="duration" className="text-gray-700">
                Duration in minutes
              </label>
              <Input
                id="duration"
                onChange={handleChange}
                value={auctionDetails.durationInMins}
                name="durationInMins"
                type="number"
                placeholder="Enter Duration"
              />
            </div>

            <DialogClose
              type="button"
              disabled={props.tokenId === selectedTokenId && isPending}
              onClick={() => auction(props.tokenId)}
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
