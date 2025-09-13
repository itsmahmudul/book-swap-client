"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    {...props}
    className={cn(
      "peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      // ✅ Base colors
      "data-[state=unchecked]:bg-white data-[state=checked]:bg-black",
      "dark:data-[state=unchecked]:bg-black dark:data-[state=checked]:bg-white",
      className
    )}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full shadow-md ring-0 transition-transform",
        "data-[state=unchecked]:translate-x-0.5 data-[state=checked]:translate-x-5",
        // ✅ Thumb colors opposite of background
        "bg-black data-[state=checked]:bg-white",
        "dark:bg-white dark:data-[state=checked]:bg-black"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }


