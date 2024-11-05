import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";
import { BaseError, useWriteContract } from "wagmi";
import { useNavigate } from "react-router-dom";
import { nebulaXAbi, nebulaXCa } from "@/constants/ABI/nebulaXcontracts";

export const CreateNFTs = () => {
  const navigate = useNavigate();

  const [tokenPrice, setTokenPrice] = useState("");

  function handleChange(evt) {
    const value = evt.target.value;
    setTokenPrice(value);
  }

  async function handlePinataUpload(imageFile) {
    try {
      const formData = new FormData();
      // @ts-expect-error not needed
      formData.append("file", imageFile, imageFile?.name);
      const response = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        },
      );
      const responseData = await response.json();
      const { IpfsHash } = responseData;
      const documentUrl = `https://${import.meta.env.VITE_PINATA_GATEWAY_URL}/ipfs/${IpfsHash}`;
      return documentUrl;
    } catch {
      alert("Trouble uploading file");
    }
  }

  const [preview, setPreview] = useState(null);
  const [tokenImage, setTokenImage] = useState(null);

  const handleFileUpload = async (event) => { 
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setTokenImage(file);
      const prevFile = URL.createObjectURL(file);
      setPreview(prevFile);
    }
  };

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  async function handleCreateNftToken() {
    const tokenUriRespData = await handlePinataUpload(tokenImage);
    // console.log("tokenUriRespData:", tokenUriRespData, tokenPrice);
    writeContract({
      address: nebulaXCa,
      abi: nebulaXAbi,
      functionName: "mintAndListNFT",
      args: [tokenUriRespData, tokenPrice],
    });
  }

  useEffect(() => {
    if (hash) {
      navigate(`/create-listing`);
    }
  }, [hash, navigate])

  useEffect(() => {
    if (error) {
      alert((BaseError).shortMessage || error.message);
    }
  }, [error]);

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
              {preview ? (
                <img
                  // aria-hidden="true"
                    src={preview}
                    alt="Avatar Preview"
                    // width={300}
                    // height={300}
                  className="h-36 w-36 rounded-[16px] object-cover"
                  // className="h-full w-full rounded-[16px] object-cover"
                  ></img>
                ) : <div className="text-center">
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
                        onChange={handleFileUpload}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs/5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>}
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
              className="text-[#000000]"
              value={tokenPrice}
              onChange={handleChange}
              placeholder="Enter Price"
            />
          </div>
        </div>
        <Button
          type="button"
          disabled={isPending || !tokenPrice || !tokenImage}
          onClick={handleCreateNftToken}
          className="w-full max-w-[353px] mx-auto text-white bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full text-base"
        >
          Mint
        </Button>
      </form>
    </div>
  );
};
