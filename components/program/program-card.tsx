import {Card, CardContent, CardFooter} from "@/components/ui/card"
import Link from "next/link";
import Image from 'next/image';


export default function ProgramCard({id, image, title, description}: {
  id: number,
  image: string,
  title: string,
  description: string
}) {
  return (
    <Card className="w-[300px] cursor-pointer hover:bg-muted">
      <Link href={`/programs/${id}`}>
        <CardContent className="p-0 pt-4 flex flex-col items-center">
          <Image className="rounded-lg" src={image} alt="Program Image" width={250} height={250} />
        </CardContent>
        <CardFooter className="flex flex-col items-start mt-4">
          <span className="font-bold text-xl">{title}</span>
          <span className="font-light">{description}</span>
        </CardFooter>
      </Link>
    </Card>
  )
};
