import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import UserTable from '@/components/user/user-table';
import {Suspense} from 'react';

export default function Users() {
  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-col">
              <CardTitle>Users</CardTitle>
              <CardDescription>Admin the users. Give em points. Send em gifts</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <UserTable/>
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </main>
  )
};
