import cn from "classnames";
import React from "react";
import { isMobile } from "../../isMobile/isMobile";
import { footerLinkData } from "./footerLinkData";

export const Footer: React.FC = () => {
  return (
    <footer
      className={cn(
        "flex justify-center gap-4 border-t border-outline-variant p-4 text-outline-variant",
        isMobile() && "mb-[env(safe-area-inset-bottom)]"
      )}
    >
      {footerLinkData.map(({ href, Icon, target, title }) => (
        <a
          key={href}
          title={title}
          className={cn(
            !isMobile() && "hover:text-outline dark:hover:text-dark-outline"
          )}
          href={href}
          target={target || "_blank"}
        >
          <Icon size={30} />
        </a>
      ))}
    </footer>
  );
};
