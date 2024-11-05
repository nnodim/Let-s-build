import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import { VerifyWallet } from "./pages/VerifyWallet";
import { Approved } from "./pages/Approved";
// import { Minting } from "./pages/Minting";
import { Kyc } from "./pages/Kyc";
import NotFound from "./pages/NotFound";
import { Dashboard } from "./pages/Dashboard";
import { AppLayout } from "./layout/AppLayout";
import { CreateNFTs } from "./pages/CreateNFTs";
import { CreateListing } from "./pages/CreateListing";
import { Auctions } from "./pages/Auctions";
import { About } from "./pages/About";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/approved" element={<Approved />} />
      <Route path="/kyc" element={<Kyc />} />
      {/* <Route path="/mint" element={<Minting />} /> */}
      <Route path="/verify-wallet" element={<VerifyWallet />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateNFTs />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
