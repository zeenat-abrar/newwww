import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const NavigationMenu = forwardRef<ElementRef<typeof NavigationMenuPrimitive.Root>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>>(
  function NavigationMenu({ className, children, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Root ref={ref} className={cn("relative w-full z-10 flex max-w-max flex-1 items-center justify-center", className)} {...props}>
        {children}
        <NavigationMenuViewport />
      </NavigationMenuPrimitive.Root>
    );
  }
);

export const NavigationMenuList = forwardRef<ElementRef<typeof NavigationMenuPrimitive.List>, ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>>(
  function NavigationMenuList({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.List
        ref={ref}
        className={cn("group w-full flex flex-1 list-none items-center justify-center space-x-1", className)}
        {...props}
      />
    );
  }
);

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-primary data-[state=open]:text-white"
);

export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(function NavigationMenuTrigger({ className, children, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), "group", className)} {...props}>
      {children} <ChevronDown className="relative top-px ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  );
});

export const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(function NavigationMenuContent({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  );
});

export const NavigationMenuLink = NavigationMenuPrimitive.Link;

export const NavigationMenuViewport = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(function NavigationMenuViewport({ className, ...props }, ref) {
  return (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(function NavigationMenuIndicator({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
});
