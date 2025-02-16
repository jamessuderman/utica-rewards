import {ComponentPropsWithoutRef} from 'react';
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {LuSend, LuSettings, LuShieldQuestion} from 'react-icons/lu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';

const secondaryNav = [
  {
    title: "Settings",
    url: "/settings",
    icon: LuSettings,
  },
  {
    title: "Support",
    url: "/support",
    icon: LuShieldQuestion,
  },
];

export function NavSecondary({path, ...props}: { path: string }
  & ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {secondaryNav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="lg"
                                 className={path.split("/")[1] === item.url.split("/")[1] ? "text-primary" : ""}>
                <Link href={item.url}>
                  <item.icon/>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <SidebarMenuButton size="lg">
                <LuSend/>
                <span>Feedback</span>
              </SidebarMenuButton>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="w-full flex flex-row items-center justify-between">
                <AlertDialogTitle className="p-0 m-0">Let us know whats on your mind!</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name"/>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="0">UI</SelectItem>
                          <SelectItem value="1">Data</SelectItem>
                          <SelectItem value="2">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="reason">Reason</Label>
                      <Textarea id="reason" rows={10}/>
                    </div>
                  </div>
                </form>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="text-foreground">Send</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
