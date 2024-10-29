import { logo1 } from "@/assets";
import { cn } from "@/lib/utils";

import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "About", href: "/about", current: true },
  { name: "Creat NFTs", href: "/create", current: false },
  { name: "Auctions", href: "/auctions", current: false },
  { name: "Dashboard", href: "/dashboard", current: false },
];
export default function NavBar() {
  return (
    <header className="py-5 px-2 sm:px-6 lg:px-8 sticky top-0 z-50 bg-[#0A0D1B] w-full">
      <nav className="relative flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex flex-1 items-center justify-between h-full">
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-primary hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" size="full">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-1 flex flex-col pt-4 pb-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => {
                        return cn(
                          isActive
                            ? ""
                            : "text-[#4F4F4F] hover:",
                          "py-2 transition-all"
                        );
                      }}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <SheetTrigger className="w-full text-left">
                        {item.name}
                      </SheetTrigger>
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img
                className="block h-7 md:h-[52px] w-auto rounded-full"
                src={logo1}
                alt="Your Company"
              />
            </Link>
          </div>
          {/* Navigation */}
          <div className="hidden sm:ml-6 lg:block text-center text-white">
            <div className="flex space-x-4 items-center">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => {
                    return cn(
                      !isActive
                        ? ""
                        : "",
                      "px-3 py-2 transition-all hover:text-gray-400"
                    );
                  }}
                  aria-current={item.current ? "page" : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>
                      <div
                        className={
                          isActive ? "w-4 h-0.5 bg-primary mx-auto" : ""
                        }
                      ></div>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
