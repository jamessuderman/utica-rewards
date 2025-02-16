import {Program} from '@/db/schema';
import {getProgram} from '@/data/programs';
import {notFound} from 'next/navigation';

export default function ProgramDetails({params} : {params: any}) {
    const program: Program = getProgram(params.programId)!;

    // This will call the closest not found page, so set one up
    if(!program) {
      notFound();
    }

    return(
      <div>Program Details for {program.title}</div>
    )
};
