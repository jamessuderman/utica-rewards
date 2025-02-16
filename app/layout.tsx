import {ReactNode} from 'react';
import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme/theme-provider"
import {SidebarInset, SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import {AppSidebar} from '@/components/sidebar/app-sidebar';
import {Separator} from '@/components/ui/separator';

export const metadata: Metadata = {
  title: "Utica Rewards",
  description: "Reward and Incentive Platform",
};

export default function RootLayout({ children }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <header
          className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1"/>
            <Separator orientation="vertical" className="mr-2 h-4"/>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </body>
    </html>
  );
}
