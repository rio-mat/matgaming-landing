import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"
import { forwardRef } from "react"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  pauseOnHover?: boolean
  reverse?: boolean
  vertical?: boolean
  repeat?: number
}

const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, reverse, pauseOnHover = false, vertical = false, repeat = 4, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("group flex overflow-hidden [--duration:40s] [--gap:1rem]", vertical ? "flex-col" : "flex-row", className)}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around gap-[var(--gap)]",
              vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "direction-reverse"
            )}
          >
            {children}
          </div>
        ))}
      </div>
    )
  }
)
Marquee.displayName = "Marquee"
export { Marquee }
