import React from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { isMobile } from "../isMobile/isMobile";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout: React.FC = () => {
  if (isMobile()) {
    return (
      <div className="grid grid-rows-layout grid-cols-1 min-h-screen min-w-full justify-center gap-2">
        <Header />
        <main>
          <ProductList />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen min-w-full justify-center">
      <div className="flex-auto grid grid-rows-layout gap-4">
        <Header />
        <main>
          <ProductList />
        </main>
        <Footer />
      </div>
    </div>
  );
};
