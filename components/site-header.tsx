"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useTheme } from "next-themes";
import { IconSun, IconMoon, IconBell } from "@tabler/icons-react";

type SiteHeaderProps = {
  children: React.ReactNode,
}
export function SiteHeader({ children }: SiteHeaderProps) {

  const setTheme = useTheme();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{children}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => { setTheme.setTheme(setTheme.theme === "dark" ? "light" : "dark") }}>
            {setTheme.theme === "dark" ? <IconSun /> : <IconMoon />}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => { }}>
            <IconBell />
          </Button>
        </div>
      </div>
    </header>
  )
}
