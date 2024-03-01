import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { MainBox } from "../MainBox";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap justify-center gap-4 px-2 pt-2 sm:px-4 sm:pt-4">
      <MainBox className="flex justify-center items-center gap-2 sm:gap-4 flex-auto flex-wrap">
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-center container">
          <Logo width={280} height={80} />
          <h1 className="inline text-headline-lg text-primary shrink-0">
            Тестовое задание
          </h1>
        </div>
      </MainBox>
    </header>
  );
};
