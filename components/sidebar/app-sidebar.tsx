"use client"

import * as React from "react"
import { MdHome, MdSettings, MdSend, MdSupport } from "react-icons/md";
import {LuHouse, LuSettings, LuLifeBuoy, LuSend} from 'react-icons/lu';

import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import {NavSecondary} from '@/components/sidebar/nav-secondary';
import {NavPrimary} from '@/components/sidebar/nav-primary';

// This is sample data.
const data = {
  user: {
    name: "James Suderman",
    email: "james.suderman@uticanational.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: LuHouse,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: LuSettings,
    },
  ],
  navSecondary: [
    {
        title: "Support",
        url: "#",
        icon: LuLifeBuoy,
    },
    {
        title: "Feedback",
        url: "#",
        icon: LuSend,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="mt-16">
        <NavPrimary items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
