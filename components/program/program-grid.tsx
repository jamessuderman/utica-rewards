import ProgramCard from '@/components/program/program-card';
import {db} from '@/db';
import {program} from '@/db/schema';

export default async function ProgramGrid() {
  const programs = await db.select().from(program);

  return (
    <div className="w-full flex flex-wrap gap-4">
      {programs.map((program) => (
        <ProgramCard key={program.id} id={program.id} image={program.image!} title={program.title}
                     description={program.description}/>
      ))}
    </div>
  )
};
