import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {LuPlus} from 'react-icons/lu';

export default function Campaigns() {
  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
      <div className="w-full">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-end justify-between">
            <div className="flex flex-col">
              <CardTitle>Campaigns</CardTitle>
              <CardDescription>Modify your campaigns for maximum effectiveness.</CardDescription>
            </div>
            <Button className="text-white"> <LuPlus/> New Campaign</Button>
          </CardHeader>
          <CardContent>

          </CardContent>
        </Card>
      </div>
    </main>
  )
};
