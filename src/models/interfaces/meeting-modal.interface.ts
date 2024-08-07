import { ReactNode } from "react";

export interface IMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  image?: string;
  buttonIcon?: string;
  buttonText?: string;
  handleClick?: () => void;
}
