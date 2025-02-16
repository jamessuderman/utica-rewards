import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import RewardChart from '@/components/dashboard/reward-chart';

export default function RewardActivity() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reward activity</CardTitle>
        <CardDescription>Loyalty program achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <RewardChart/>
        <div className="w-full flex gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span className="text-gray-400">Earned Points</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-chart-2 rounded-full"></div>
            <span className="text-gray-400">Admin Awarded Points</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-foreground rounded-full"></div>
            <span className="text-gray-400">Spent Points</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
};
