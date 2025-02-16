import {LuShieldAlert} from 'react-icons/lu';
import {db} from '@/db';
import {faq} from '@/db/schema';

function FaqItem({question, answer}: { question: string, answer: string }) {
  return (
    <li className="flex flex-col gap-2 my-2">
      <div className="flex gap-4">
        <LuShieldAlert className="w-6 h-6"/>
        {question}
      </div>
      <p className="text-gray-400 ml-10">{answer}</p>
    </li>
  )
}

export default async function FaqList() {
  const faqData = await db.select().from(faq);
  // Remove this delay
  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
    <ul className="mt-4">
      {faqData.map((item) =>
        <FaqItem key={item.id} question={item.question} answer={item.answer}/>
      )}
    </ul>
  )
};
