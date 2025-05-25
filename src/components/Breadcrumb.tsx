import { BreadcrumbItem } from "@/types";
import { cn } from "@/utils/common";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Props = {
  className?: string;
};

const Breadcrumb: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const tHeader = useTranslations("breadcrumb");

  const breadcrumbs = () => {
    const regex = /^\/(en|vi)(\/|$)/;
    const paths: BreadcrumbItem[] = pathname
      ?.replace(regex, "/")
      .split("/")
      ?.filter(Boolean)
      ?.map((item, index, array) => {
        let flag = false;
        const href = array
          .reduce((pre: string[], cur) => {
            if (!flag) {
              pre.push(cur);
            }
            if (cur === item) {
              flag = true;
            }
            return pre;
          }, [])
          ?.join("/");
        return {
          name: tHeader(item),
          href: `/${href}`,
          isLastChild: index + 1 === array.length,
        };
      });

    return [
      {
        name: tHeader("home"),
        href: "/",
      },
      {
        name: tHeader("product"),
        href: "/",
        isLastChild: true,
      },
      ...paths,
    ];
  };

  const renderBreadcrumb = (
    breadcrumb: BreadcrumbItem,
    index: number,
    breadcrumbs: BreadcrumbItem[]
  ) => {
    return (
      <span key={breadcrumb.name} className="flex items-center">
        <Link
          href={breadcrumb.href}
          className={cn(
            breadcrumb?.isLastChild && "pointer-events-none text-[#024897]",
            "textDisabled hover:text-blue-600 dark:hover:text-blue-500"
          )}
        >
          {breadcrumb.name}
        </Link>
        {breadcrumb.name !== breadcrumbs[breadcrumbs.length - 1].name && (
          <span className="mx-2 text-gray-400 dark:text-gray-600">
            <MdOutlineKeyboardArrowRight />
          </span>
        )}
      </span>
    );
  };

  return (
    <div
      className={cn(
        className,
        "text-[14px] flex items-center my-[24px] px-[8px] sm:px-0"
      )}
    >
      {breadcrumbs().map(renderBreadcrumb)}
    </div>
  );
};
export default Breadcrumb;
