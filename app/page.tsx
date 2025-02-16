import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Avatar, AvatarFallback} from '@/components/ui/avatar';
import ProgramProgress from '@/components/program/program-progress';
import RewardActivity from '@/components/dashboard/reward-activity';
import RecommendedPrograms from '@/components/dashboard/recommended-programs';


export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-4 flex-1 items-center p-4">
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>James Suderman</CardTitle>
            <CardDescription>Active reward member since January 5, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ProgramProgress title="Monkey Around" progress={75} current={750} goal={1000}/>
            <ProgramProgress title="Attractor Beam" progress={30} current={300} goal={1000}/>
          </CardContent>
          <CardFooter>
            <div className="ml-auto flex gap-2">
              <Avatar>
                <AvatarFallback>XP</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>EP</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>GS</AvatarFallback>
              </Avatar>
            </div>
          </CardFooter>
        </Card>
      </div>

      <RewardActivity />

      <RecommendedPrograms/>
    </main>
  );
}
