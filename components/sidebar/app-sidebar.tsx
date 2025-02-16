"use client"

import {ComponentProps} from 'react';
import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import {NavSecondary} from '@/components/sidebar/nav-secondary';
import {NavPrimary} from '@/components/sidebar/nav-primary';
import {NavAdmin} from '@/components/sidebar/nav-admin';
import {usePathname} from 'next/navigation';
import {userData} from '@/data/mockData';

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const path: string = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="mt-16">
        <NavPrimary path={path} />
        <NavAdmin path={path} />
        <NavSecondary className="mt-auto" path={path} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData[0]} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
