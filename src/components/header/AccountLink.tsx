import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

interface AccountLinkProps {
  label: string;
  className?: string;
}

const AccountLink = ({ label, className = "" }: AccountLinkProps) => (
  <Link href="/#" className={className}>
    <span className="flex items-center gap-[8px]">
      <FaCircleUser className="sm:size-[32px] size-[22px] text-[#0154C5]" />
      <span className="lg:inline-block hidden font-[500] text-textPrimary">
        {label}
      </span>
    </span>
  </Link>
);

export default AccountLink; 