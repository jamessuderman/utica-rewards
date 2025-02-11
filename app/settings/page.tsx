import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Settings() {
    return(
      <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
        <div className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Do what you want. You are in control.</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        </div>
      </main>
    )
};
