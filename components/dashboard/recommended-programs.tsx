import ProgramCard from '@/components/program/program-card';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {db} from '@/db';
import {program} from '@/db/schema';

export default async function RecommendedPrograms() {
  const programs = await db.select().from(program).limit(3);

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Recommended Programs</CardTitle>
          <CardDescription>Hand crafted programs to earn loyalty points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full flex gap-4 gap-4">
            {programs.map((program) => (
              <ProgramCard key={program.id} id={program.id} image={program.image!} title={program.title} description={program.description}/>
            ))}
          </div>
        </CardContent>
      </Card>
    )
};
