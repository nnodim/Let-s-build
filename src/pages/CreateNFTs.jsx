import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";

export const CreateNFTs = () => {
  return (
    <div className="relative min-h-[calc(100vh-90px)] z-10 flex flex-col items-center justify-center py-8">
      <form className="flex flex-col gap-5">
        <h1 className="text-4xl/[48px] font-bold">Create A New NFT</h1>
        <p className="w-full max-w-[500px]">
          &quot;Unleashing creativity, one pixel at a time! 🌟✨ #NewNFT
          #DigitalArt #CryptoCreativity&quot;
        </p>

        <div className="flex flex-col gap-5 mt-10 bg-white rounded-2xl p-5">
          <div className="">
            <label
              htmlFor="photo"
              className="block text-sm/6 font-medium sr-only text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex justify-center border border-dashed border-gray-900/25 rounded-lg px-6 py-10">
              <div className="text-center">
                <Image
                  aria-hidden="true"
                  className="mx-auto h-12 w-12 text-black"
                />
                <div className="mt-4 flex text-sm/6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Add image</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      accept="image/*"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs/5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="price" className="text-gray-700">
              Price
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              placeholder="Enter Price"
            />
          </div>
        </div>
        <Button
          type="button"
          //   onClick={() => navigate(`/auction`)}
          className="w-full max-w-[353px] mx-auto text-white bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full text-base"
        >
          Mint
        </Button>
      </form>
    </div>
  );
};
