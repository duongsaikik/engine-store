import { cn } from "@/utils/common";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

interface AccountLinkProps {
  label: string;
  className?: string;
}

const AccountLink = ({ label, className = "" }: AccountLinkProps) => (
  <Link
    href="/#"
    className={cn(
      className,
      "hover:bg-hover cursor-pointer p-[4px] rounded-[8px] transition-all duration-200"
    )}
  >
    <span className="flex items-center gap-[8px]">
      <FaCircleUser className="xl:size-[32px] sm:size-[28px] size-[24px] text-[#0154C5]" />
      <span className="lg:inline-block hidden font-[500] text-textPrimary">
        {label}
      </span>
    </span>
  </Link>
);

export default AccountLink;
