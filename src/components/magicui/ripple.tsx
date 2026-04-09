import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface RippleProps {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  className?: string
}

export function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
}: RippleProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]", className)}>
      {Array.from({ length: numCircles }, (_, i) => {
        const circleSize = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const animDelay = `${i * 0.06}s`
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid"
        const borderOpacity = 5 + i * 5

        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full border bg-orange-400/25"
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              opacity,
              animationDelay: animDelay,
              borderStyle,
              borderWidth: "1px",
              borderColor: `rgba(234, 88, 12, ${borderOpacity / 100})`,
              top: "50%",
              left: "50%",
              translate: "-50% -50%",
            } as CSSProperties}
          />
        )
      })}
    </div>
  )
}
