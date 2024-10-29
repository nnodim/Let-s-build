import { nft1, nft2, nft3 } from "@/assets";
import { PlaceBid } from "@/components/PlaceBid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Verified } from "lucide-react";

const NFTs = [
  {
    img: nft1,
    verified: true,
    name: "Random Namee",
    tokenID: 100,
    auctionID: 1,
    minBid: 100,
    maxBid: 200,
    highestBidder: "John",
    creator: "0x123456789",
    endDate: "2022-01-01",
    isActive: false,
  },
  {
    img: nft2,
    verified: true,
    name: "Random Namee",
    tokenID: 100,
    auctionID: 1,
    minBid: 100,
    maxBid: 200,
    highestBidder: "John",
    creator: "0x123456789",
    endDate: "2022-01-01",
    isActive: true,
  },
  {
    img: nft3,
    verified: false,
    name: "Random Namee",
    tokenID: 100,
    auctionID: 1,
    minBid: 100,
    maxBid: 200,
    highestBidder: "John",
    creator: "0x123456789",
    endDate: "2022-01-01",
    isActive: true,
  },
  {
    img: nft1,
    verified: true,
    name: "Random Namee",
    tokenID: 100,
    auctionID: 1,
    minBid: 100,
    maxBid: 200,
    highestBidder: "John",
    creator: "0x123456789",
    endDate: "2022-01-01",
    isActive: false,
  },
  {
    img: nft2,
    verified: true,
    name: "Random Namee",
    tokenID: 100,
    auctionID: 1,
    minBid: 100,
    maxBid: 200,
    highestBidder: "John",
    creator: "0x123456789",
    endDate: "2022-01-01",
    isActive: true,
  },
  {
    img: nft3,
    verified: false,
    name: "Random Namee",
    tokenID: 100,
    auctionID: 1,
    minBid: 100,
    maxBid: 200,
    highestBidder: "John",
    creator: "0x123456789",
    endDate: "2022-01-01",
    isActive: true,
  },
];
export const Auctions = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center p-8 pb-20">
      <div className="flex flex-col items-center gap-5 w-full">
        <h1 className="text-4xl/[48px] font-bold">Auctions</h1>
        <p className="w-full max-w-[500px]">
          Bid on your favorite NFT on NebulaX, the best marketplace to discover
          exciting NFT auctions hosted by talented NFT creators.
        </p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NFT</TableHead>
              <TableHead>Token Id</TableHead>
              <TableHead>Auction Id</TableHead>
              <TableHead>Min Bid</TableHead>
              <TableHead>Max Bid</TableHead>
              <TableHead>Highest Bidder</TableHead>
              <TableHead>Creator</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>isActive</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {NFTs.map((nft) => (
              <TableRow key={nft.auctionID}>
                <TableCell>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={nft.img}
                        alt="nft"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{nft.name}</p>
                    </div>
                    {nft.verified && (
                      <Verified className="h-4 w-4 text-[#1FC7D4]" />
                    )}
                  </div>
                </TableCell>
                <TableCell>{nft.tokenID}</TableCell>
                <TableCell>{nft.auctionID}</TableCell>
                <TableCell>{nft.minBid}</TableCell>
                <TableCell>{nft.maxBid}</TableCell>
                <TableCell>{nft.highestBidder}</TableCell>
                <TableCell>{nft.creator}</TableCell>
                <TableCell>{nft.endDate}</TableCell>
                <TableCell>{nft.isActive ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <PlaceBid />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
