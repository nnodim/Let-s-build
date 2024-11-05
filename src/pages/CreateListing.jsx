import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { BaseError, useWriteContract} from "wagmi";
import { nebulaXAbi, nebulaXCa } from "@/constants/ABI/nebulaXcontracts";

export const CreateListing = () => {
    const navigate = useNavigate();

    const [tokenId, setTokenId] = useState("");
    const [tokenPrice, setTokenPrice] = useState("");

    function handleChange(evt) {
        const value = evt.target.value;
        setTokenPrice(value);
    }

    function handleTokenIdChange(evt) {
        const value = evt.target.value;
        setTokenId(value);
    }

    
    const { data: hash, isPending, error, writeContract } = useWriteContract();

    async function handleCreateListing() {
        writeContract({
            address: nebulaXCa,
            abi: nebulaXAbi,
            functionName: "createListing",
            args: [tokenId, tokenPrice],
        });
    }

    useEffect(() => {
        if (hash) {
            navigate(`/dashboard`);
        }
    }, [hash, navigate]);

    useEffect(() => {
        if (error) {
            alert((BaseError).shortMessage || error.message);
        }
    }, [error]);

    return (
        <div className="relative min-h-[calc(100vh-90px)] z-10 flex flex-col items-center justify-center py-8">
            <form className="flex flex-col gap-5">
                <h1 className="text-4xl/[48px] font-bold">List NFT</h1>
                <p className="w-full max-w-[500px]">
                    &quot;Unleashing creativity, one pixel at a time! 🌟✨ #NewNFT
                    #DigitalArt #CryptoCreativity&quot;
                </p>

                <div className="flex flex-col gap-5 mt-10 bg-white rounded-2xl p-5">
                    
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="price" className="text-gray-700">
                            Token ID
                        </label>
                        <Input
                            id="tokenId"
                            name="tokenId"
                            type="number"
                            value={tokenId}
                            className="text-[#000000]"
                            onChange={handleTokenIdChange}
                            placeholder="2"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="price" className="text-gray-700">
                            Price
                        </label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={tokenPrice}
                            className="text-[#000000]"
                            onChange={handleChange}
                            placeholder="Enter Price"
                        />
                    </div>
                </div>
                <Button
                    type="button"
                    disabled={isPending || !tokenId || !tokenPrice}
                    onClick={handleCreateListing}
                    className="w-full max-w-[353px] mx-auto text-white bg-[#1D205C] hover:bg-[#1D205C]/70 h-auto px-10 py-5 rounded-full text-base"
                >
                    List
                </Button>
            </form>
        </div>
    );
};
