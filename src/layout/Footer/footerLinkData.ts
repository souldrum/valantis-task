import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaTelegramPlane, FaVk } from "react-icons/fa";

type FooterDataType = {
  href: string;
  Icon: IconType;
  target?: React.HTMLAttributeAnchorTarget;
  title: string;
};

export const footerLinkData: FooterDataType[] = [
  {
    href: "https://github.com/souldrum/valantis-task",
    Icon: FaGithub,
    title: "ссылка на репозиторий",
  },
  {
    href: "https://vk.com/souldrum",
    Icon: FaVk,
    title: "страница автора в vk",
  },
  {
    href: "https://t.me/souldrum",
    Icon: FaTelegramPlane,
    title: "телеграм автора",
  },
  {
    href: "mailto:soul_20585@mail.ru",
    Icon: FaEnvelope,
    title: "написать на почту",
    target: "_self",
  },
];
