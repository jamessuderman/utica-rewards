"use client"

import {LuMoon, LuSun} from 'react-icons/lu';
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Checkbox} from '@/components/ui/checkbox';

export default function Settings() {
  const {setTheme} = useTheme();

  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-col">
              <CardTitle>Settings</CardTitle>
              <CardDescription>Do what you want. You are in control.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 items-center">
              Toggle Theme
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <LuSun
                      className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <LuMoon
                      className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-full bg-muted text-white rounded-lg p-4 mt-4">
              <h1 className="text-xl font-bold">Consent</h1>
              <p className="text-md text-foreground my-4">
                We use cookies to manage the application and perform functional tasks. We do not use them to track you
                or take your information. Please review the points listed below and either opt in or out of cookie
                usage.
              </p>
              <div className="flex flex-col w-full gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms"/>
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I accept the functional cookies
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms"/>
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I accept the application cookies
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms"/>
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I accept terms and conditions
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
};
