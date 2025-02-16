import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import FaqList from '@/components/support/faq-list';
import {Suspense} from 'react';


export default function Support() {
  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-col">
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Everything you want to know is here.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <FaqList/>
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </main>
  )
};
