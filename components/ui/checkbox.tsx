// "use client"

// import * as React from "react"
// import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
// import { CheckIcon } from "@radix-ui/react-icons"

// import { cn } from "@/lib/utils"

// const Checkbox = React.forwardRef<
//   React.ElementRef<typeof CheckboxPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
// >(({ className, ...props }, ref) => (
//   <CheckboxPrimitive.Root
//     ref={ref}
//     className={cn(
//       "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
//       className
//     )}
//     {...props}
//   >
//     <CheckboxPrimitive.Indicator
//       className={cn("flex items-center justify-center text-current ")}
//     >
//       <CheckIcon className="h-4 w-4 " />
//     </CheckboxPrimitive.Indicator>
//   </CheckboxPrimitive.Root>
// ))
// Checkbox.displayName = CheckboxPrimitive.Root.displayName

// export { Checkbox }
// "use client"
// import * as React from " react";
// import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
// import { CheckIcon } from "@radix-ui/react-icons";
// import { cn } from "@/lib/utils";
// import { useState } from "react";

// const Checkbox = React.forwardRef<
//   React.ElementRef<typeof CheckboxPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
// >(({ className, ...props }, ref) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const toggleCheck = () => {
//     setIsChecked((prev) => !prev);
//   };

//   return (
//     <CheckboxPrimitive.Root
//       ref={ref}
//       className={cn(
//         "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
//         isChecked && "checked", // Apply the 'checked' class when isChecked is true
//         className
//       )}
//       {...props}
//       onClick={toggleCheck} // Toggle the isChecked state on click
//     >
//       <CheckboxPrimitive.Indicator
//         className={cn("flex items-center justify-center text-current")}>
//         <CheckIcon className={`h-4 w-4 check-icon ${isChecked && "rotate"}`} />{" "}
//         {/* Apply the 'check-icon' and 'rotate' class when isChecked is true */}
//       </CheckboxPrimitive.Indicator>
//     </CheckboxPrimitive.Root>
//   );
// });

// Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// export { Checkbox };
"use client"

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const toggleCheck = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsChecked((prev) => !prev);
      setIsAnimating(false);
    }, 200); // Adjust the delay to match the transition duration

    // Prevent multiple clicks during animation
    props.onClick?.(event);
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
      onClick={toggleCheck}>
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}>
        <CheckIcon className={`h-4 w-4
        ${isChecked && "checked"}
        ${isAnimating ? "fade-out" : "fade-in"}
         ${isChecked ? "check-icon" : ""}`} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
