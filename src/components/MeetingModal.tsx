import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import { IMeetingModalProps } from "@/models";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MeetingModal = ({
  buttonText,
  className,
  handleClick,
  isOpen,
  onClose,
  title,
  buttonIcon,
  children,
  image,
}: IMeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="flex sm:w-full max-w-[520px] flex-col gap-6 rounded-2xl border-none bg-dark-1 px-6 py-9 text-white w-fit"
      >
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image
                src={image}
                alt="image"
                width={72}
                height={72}
                className="w-auto h-auto"
              />
            </div>
          )}
          <DialogTitle
            className={cn("text-xl text-nowrap sm:text-3xl font-bold leading-[42px]", className)}
          >
            {title}
          </DialogTitle>
          {children}
          <Button
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
                className="w-auto h-auto"
              />
            )} &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
