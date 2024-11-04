import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/v1730744343/let%27s%20do%20it/wyckhc98fqfldjgrbmfc.jpg')] min-h-screen bg-no-repeat bg-cover bg-blend-multiply relative text-white font-inter">
        <div className="absolute min-h-screen inset-0 bg-black bg-opacity-60"></div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
