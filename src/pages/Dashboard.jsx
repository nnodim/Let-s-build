import { img1, img2, nft1, nft2, nft3 } from "@/assets";
import { AuctionModal } from "@/components/AuctionModal";
import { Button } from "@/components/ui/button";

const NFTs = [
  {
    img: nft1,
    price: 100,
    sold: true,
  },
  {
    img: nft2,
    price: 200,
    sold: true,
  },
  {
    img: nft3,
    price: 300,
    sold: false,
  },
];

export const Dashboard = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-between gap-10 px-8">
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold">NFTs LISTING</h2>
            <p className="text-2xl max-w-[500px] w-full font-light">
              Checkout Top NFTs listing and their pricesup for buying and
              auctioning
            </p>
          </div>
          <div className="flex flex-col">
            <img src={img1} className="max-w-[600px] w-full" alt="" />
            <div className="flex flex-col gap-4 bg-[#0A0D1B] p-4">
              <p className="font-extrabold text-4xl">Music NFTs</p>
              <p className="flex items-center gap-2 text-3xl">
                <img src={img2} className="rounded-full w-14 h-14" alt="" /> The
                Hans
              </p>
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-4 my-28">
          <div className="grid grid-cols-3 gap-4">
            {NFTs.map((nft, i) => (
              <div className="flex flex-col" key={i}>
                <img src={nft.img} className="w-full" alt="" />
                <div className="flex flex-col w-full gap-3 bg-[#0A0D1B] justify-between p-4 font-mono">
                  <p className="text-xs text-[#858584]">Price</p>
                  <div className="flex items-center justify-between gap-4">
                    <p className="">{nft.price}</p>
                    <p className="">{nft.sold ? "Sold" : "For Sale"}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <Button className="bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-5 py-2 rounded-full">
                      Buy
                    </Button>
                    <AuctionModal />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
