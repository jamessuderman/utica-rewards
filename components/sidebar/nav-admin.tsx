import {ComponentPropsWithoutRef} from 'react';
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {LuMegaphone, LuUsers} from 'react-icons/lu';

const adminNav = [
  {
    title: "Campaigns",
    url: "/campaigns",
    icon: LuMegaphone,
  },
  {
    title: "Users",
    url: "/users",
    icon: LuUsers,
  },
];

export function NavAdmin({ path, ...props }: { path: string }
  & ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarGroupLabel>Admin</SidebarGroupLabel>
        <SidebarMenu>
          {adminNav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="lg" className={path.split("/")[1] === item.url.split("/")[1] ? "text-primary" : ""}>
                <Link href={item.url}>
                  <item.icon/>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
