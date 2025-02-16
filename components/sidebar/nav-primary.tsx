import {ComponentPropsWithoutRef} from 'react';
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {LuHouse, LuLayoutGrid} from 'react-icons/lu';

const primaryNav = [
  {
    title: "Home",
    url: "/",
    icon: LuHouse,
  },
  {
    title: "Programs",
    url: "/programs",
    icon: LuLayoutGrid,
  },
];


export function NavPrimary({path, ...props}: { path: string }
  & ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {primaryNav.map((item) => {
            return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="lg" className={path.split("/")[1] === item.url.split("/")[1] ? "text-primary" : ""}>
                <Link href={item.url}>
                  <item.icon/>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            )})}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
