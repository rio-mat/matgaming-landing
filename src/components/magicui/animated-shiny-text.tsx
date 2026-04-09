import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function AnimatedShinyText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex animate-shiny-text bg-clip-text text-transparent",
        "bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)] bg-[length:250%_100%]",
        "text-neutral-300",
        className
      )}
      style={{ WebkitTextFillColor: "unset" }}
    >
      {children}
    </span>
  )
}
