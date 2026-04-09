import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

interface DotPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number
  height?: number
  cx?: number
  cy?: number
  cr?: number
}

export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = `dot-pattern-${Math.random().toString(36).slice(2, 9)}`
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/20", className)}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}
