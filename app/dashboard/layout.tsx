"use client"
import { NavbarSimple } from "../ui/navbars/NavbarSimple";
import { HeaderSimple } from "../ui/header/HeaderSimple";
// import { TableSort } from "./users/TableSort";
import { TableReviews } from "./users/TableReviews";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <HeaderSimple/>
      <NavbarSimple />
      <div className="flex-none md:w-64">
        
       
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <TableReviews/>
    </div>
  );
}