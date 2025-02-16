import {Progress} from '@/components/ui/progress';

export default function ProgramProgress({title, progress, current, goal}: {
  title: string,
  progress: number,
  current: number,
  goal: number
}) {
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="text-sm">{title}</div>
      <Progress value={progress} className="w-full"/>
      <div className="text-sm ml-auto">{current} / {goal}</div>
    </div>
  )
};
