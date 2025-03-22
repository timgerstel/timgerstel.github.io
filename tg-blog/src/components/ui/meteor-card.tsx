'use client'
import { Meteors } from '@/components/ui/meteors';
import { ConfettiButton} from "@/components/magicui/confetti";
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { BorderBeam } from '../magicui/border-beam';

export default function MeteorCard(props: any){
  return (
    <div className="mt-10">
      <div className=" w-[275px] sm:w-[375px] md:w-[450px] lg:w-[500px] relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-[rgba(243,244,246,0.85)] dark:bg-[rgba(17,24,39,0.85)] border border-gray-50 dark:border-gray-800  px-4 py-5 h-full overflow-hidden rounded-xl flex flex-col justify-end items-start">
  
            <h2 className="font-extrabold text-xl pb-5">{props.title}</h2>

  
            <p className="font-normal text-xs text-slate-800 dark:text-slate-300 mb-4 relative z-40">
              {props.desc}
            </p>
            <ConfettiButton className="border px-3 my-0 py-0 h-[25px] rounded-lg  border-gray-500 text-slate-700 dark:text-gray-300 text-xs hover:bg-slate-300 dark:hover:bg-slate-700">
              tru 👍
            </ConfettiButton>
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
            <BorderBeam
              duration={20}
              size={150}
              delay={Math.random() * 10}
              className="from-transparent via-yellow-500 to-transparent"
            /> 
          </div>
      </div>
    </div>
  )
}

export const IconCard = ({
  img,
  label,
}: {
  img: string;
  label: string;
}) => {
  const [showBeam, setBeam] = useState(false);
  return (
    <div className="relative overflow-hidden" onMouseEnter={() => setBeam(true)} onMouseLeave={() => setBeam(false)}>
      <div className="flex flex-col justify-center items-center">
        <figure
          className={cn(
            "relative h-full w-20 cursor-pointer overflow-hidden rounded-xl border p-4",
            // light styles
            "border-gray-950/[.1] bg-white/[.6] hover:bg-gray-100/[.6]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-600/[.5] dark:hover:bg-gray-500/[.5]",
          )}
        >
          
          <div className="flex flex-row items-center justify-center gap-2 z-20">
            <img className="rounded-full z-20" width="32" height="32" alt="" src={img} />
          </div>

          {showBeam && <BorderBeam
            duration={6}
            size={75}
            className="from-transparent via-blue-500 to-transparent"
          />}
            {showBeam && <BorderBeam
            duration={6}
            size={75}
            delay={3}
            className="from-transparent via-orange-500 to-transparent"
          />}
        </figure>
        <span className='text-sm py-1 font-semibold'>{label}</span>
      </div>
    </div>
  );
};