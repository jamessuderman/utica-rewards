import {ReactNode} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {LuPlus} from 'react-icons/lu';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import ImagePicker from '@/components/image-picker';
import {createProgram} from '@/lib/actions';

export default function ProgramLayout({children}: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
      <div className="w-full">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-end justify-between">
            <div className="flex flex-col">
              <CardTitle>Programs</CardTitle>
              <CardDescription>Select from a program to start earning reward points.</CardDescription>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="text-white"> <LuPlus/> New Program</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader className="w-full flex flex-row items-center justify-between">
                  <AlertDialogTitle className="p-0 m-0">Create a New Program</AlertDialogTitle>
                </AlertDialogHeader>
                <form action={createProgram}>
                  <AlertDialogDescription>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title"/>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" name="description" rows={3}/>
                      </div>
                      <ImagePicker label="Program Image" name="programImage"/>
                    </div>
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="text-foreground" type="submit">Create</AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
        </Card>
      </div>
    </main>
  )
};
