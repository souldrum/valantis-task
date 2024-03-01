import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { isMobile } from "../../isMobile/isMobile";
import { MainBox } from "../MainBox";

export const Header: React.FC = () => {
  if (isMobile()) {
    return (
      <header className="flex flex-col gap-3 sticky z-10 top-0 text-headline-sm border-b border-outline-variant bg-surface-container-lowest px-3 pb-3 pt-[calc(0.75rem_+_env(safe-area-inset-top))]">
        <div className="flex justify-between items-end">
          <Logo />
          <h1 className="inline text-body-lg text-primary">Тестовое задание</h1>
        </div>
      </header>
    );
  }

  return (
    <header className="flex flex-wrap justify-center gap-4 px-4 pt-4">
      <MainBox className="flex justify-center items-center gap-4 flex-auto flex-wrap">
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
