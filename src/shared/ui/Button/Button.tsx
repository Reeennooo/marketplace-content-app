import {Button as BaseButton} from "shared/ui-kit/button";
import {cn} from 'shared/lib/utils.ts';


type Props = React.ComponentProps<typeof BaseButton> & {
  tone?: "primary" | "wb" | "success" | "danger"
}

export function Button({
  className,
  tone = "primary",
  ...props
}: Props) {
  return (
    <BaseButton
      className={cn(
        tone === "wb" && "bg-[#cb11ab] text-white hover:bg-[#b10f95]",
        tone === "success" && "bg-green-600 text-white",
        tone === "danger" && "bg-red-500 text-white",
        className
      )}
      {...props}
    />
  )
}