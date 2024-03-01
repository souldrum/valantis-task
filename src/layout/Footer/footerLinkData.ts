import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaTelegramPlane, FaVk } from "react-icons/fa";

type FooterDataType = {
  href: string;
  Icon: IconType;
  target?: React.HTMLAttributeAnchorTarget;
};

export const footerLinkData: FooterDataType[] = [
  {
    href: "https://github.com/souldrum/valantis-task",
    Icon: FaGithub,
  },
  {
    href: "https://vk.com/souldrum",
    Icon: FaVk,
  },
  {
    href: "https://t.me/souldrum",
    Icon: FaTelegramPlane,
  },
  {
    href: "mailto:soul_20585@mail.ru",
    Icon: FaEnvelope,
    target: "_self",
  },
];
