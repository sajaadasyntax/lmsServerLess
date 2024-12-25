import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backgroundVariants = cva(
    "rounded-full flex items-center justify-center",
     {
        variants: {
            variant: {
                default: "bg-sky-100",
                success: "bg-emerlad-100",
            },
            iconVariant: {
                default: "text-sky-700",
                success: "text-emerlad-700",
            },
            size: {
                default: "p-2",
                sm: "p-1",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
     }
);

    const iconVariants = cva(
        "",
        {
            variants: {
                variant: {
                    default: "text-sky-700",
                    success: "text-emerlad-700",
                },
                size: {
                    default: "h-8 w-8",
                    sm: "h-4 w-4",
                },
            },
            defaultVariants: {
                variant: "success",
                size: "default",
            }
        }
    );


    type backgroundVariantsProps = VariantProps <typeof backgroundVariants>;
    type iconVariantsProps = VariantProps <typeof iconVariants>;

    interface iconBadgeProps extends backgroundVariantsProps, iconVariantsProps
    {
        icon: LucideIcon;
    };

    export const IconBadge= ({
        icon: Icon,
        variant,
        size,
     
    }: iconBadgeProps) => {
        return(
       <div className={cn(backgroundVariants({variant, size}))}>
        <Icon className={cn(iconVariants({variant, size}))} />
        </div>)

    };