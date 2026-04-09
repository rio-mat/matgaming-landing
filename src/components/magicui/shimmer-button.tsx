import type { CSSProperties, ComponentPropsWithoutRef } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
}

const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 [background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        {...props}
      >
        {/* shimmer */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden",
            "[border-radius:var(--radius)]"
          )}
        >
          <div className="absolute inset-[-100%] animate-shimmer-slide [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
        {/* backdrop */}
        <div
          className={cn(
            "absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
          )}
        />
        {/* content */}
        <span className="z-10 flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-white">
          {children}
        </span>
      </button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"
export { ShimmerButton }
