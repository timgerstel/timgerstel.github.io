import { ConfettiButton } from "@/components/magicui/confetti";
import { Meteors } from '@/components/ui/meteors';

export default function MeteorCard(props: any){
  return (
    <div className="mt-10">
      <div className=" w-[275px] sm:w-[375px] md:w-[450px] lg:w-[500px] relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-100 dark:bg-gray-900 border border-gray-50 dark:border-gray-800  px-4 py-5 h-full overflow-hidden rounded-xl flex flex-col justify-end items-start">
  
            <h2 className="font-extrabold text-xl pb-5">{props.title}</h2>

  
            <p className="font-normal text-xs text-slate-800 dark:text-slate-300 mb-4 relative z-40">
              {props.desc}
            </p>
            <ConfettiButton className="border px-3 my-0 py-0 h-[25px] rounded-lg  border-gray-500 text-slate-700 dark:text-gray-300 text-xs hover:bg-slate-300 dark:hover:bg-slate-700">
              tru 👍
            </ConfettiButton>
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
      </div>
    </div>
  )
}