/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link'
import MenuBar from './menubar';
import { DataTable } from '@/components/ui/data-table';
import { columns } from '@/components/ui/data-table.d';
import { Boxes } from '@/components/ui/background-boxes';
import { HardHat, Construction } from 'lucide-react';
import { GlowingStarsBackground } from '@/components/ui/glowing-star-bg';
import MeteorCard from '@/components/ui/meteor-card';
import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';

const IconCard = ({
  img,
  label,
}: {
  img: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <figure
        className={cn(
          "relative h-full w-20 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.01] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
        </div>
      </figure>
      <span>{label}</span>
    </div>
  );
};


export default async function Home() {
  try{
    const res = await fetch("https://api.github.com/repos/timgerstel/timgerstel.github.io/git/trees/master?recursive=1")
    const json = await res.json();
    const postUrl = json.tree.filter((item: any) => item.path === "posts")[0].url;
    const postsRes = await fetch(postUrl);
    const postsJson = await postsRes.json();
    const posts = postsJson.tree;
    const postTitles = posts.map((item: any) => item.path);

    return (
      <div className="tg-app-main-container w-full font-(family-name:--Inter)
        h-[3250px] lg:h-[2500px]">
        <MenuBar />
        <main className="flex flex-col items-center
        ml-5 md:ml-16
        h-full
        mr-5 md:mr-16
        border-l border-r border-dashed border-[rgba(0,132,255,0.1)]
        overflow-hidden z-10">
          <h1 className="font-extrabold flex flex-row my-5"><Construction />&nbsp;UNDER CONSTRUCTION&nbsp;<Construction /></h1>
          <div className="w-full 
            pl-5 md:pl-16
            pr-5 md:pr-16
          absolute flex flex-col items-center overflow-hidden z-30 top-20">
            <DataTable columns={columns} data={postTitles.map((post: any, ind: any) => {
              const parts = post.split("---");
              return {id: ind, title: parts[1], desc: parts[2], date: parts[0], url: encodeURIComponent(post)}
            })}/>
          </div>

            {/* [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_55%,transparent_90%)]  */}
          <div className="absolute top-[1000px] flex w-[calc(100vw-64px)] md:w-[calc(100vw-144px)]
            ml-5 md:ml-96
            mr-5 md:mr-96
            flex-col items-center overflow-hidden ">
              <span className="text-3xl font-extrabold mb-8">Skills.</span>
            <div className="bg-transparent
                h-[350px]
                ml-5 md:ml-64
                mr-5 md:mr-64
                flex flex-col items-center justify-center gap-12
               [mask-image:linear-gradient(90deg,transparent_35%,rgba(0,0,0,1)_45%,rgba(0,0,0,1)_55%,transparent_65%)] 
                ">
              <Marquee className="[--duration:20s]">
                <IconCard img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" label="React"/>
                <IconCard img="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" label="Angular"/>
                <IconCard img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" label="TypeScript"/>
                <IconCard img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" label="JavaScript"/>
                <IconCard img="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" label="Next.js"/>
                <IconCard img="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" label="Node.js"/>
                <IconCard img="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" label="Express.js"/>
                <IconCard img="https://img.icons8.com/?size=100&id=sOWbK4N3cxGh&format=png&color=000000" label="Webpack"/>
                <IconCard img="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" label="Tailwind CSS"/>
                <IconCard img="https://img.icons8.com/?size=100&id=24465&format=png&color=000000" label="Swift"/>
              </Marquee>
              <Marquee reverse className="[--duration:20s]">
                <IconCard img="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg" label="CSS" />
                <IconCard img="https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg" label="C"/>
                <IconCard img="https://img.icons8.com/?size=100&id=10250&format=png&color=000000" label="bash"/>
                <IconCard img="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" label="Java"/>
                <IconCard img="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" label="Python"/>
                <IconCard img="https://img.icons8.com/?size=100&id=b1T0BJuTPGAz&format=png&color=000000" label="Electron"/>
                <IconCard img="https://img.icons8.com/?size=100&id=24662&format=png&color=000000" label="REXX"/>
                <IconCard img="https://img.icons8.com/?size=100&id=24662&format=png&color=000000" label="JCL"/>
                <IconCard img="https://img.icons8.com/?size=100&id=106550&format=png&color=000000" label="BlackDuck"/>
                <IconCard img="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" label="shadcn/ui"/>
                
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </div>



          <div className="h-[1700px] lg:h-[950px] absolute w-full top-[1600px]
            overflow-hidden z-0">
              
            <GlowingStarsBackground className="h-[1700px] lg:h-[950px] top-[1600px]
              ml-5 md:ml-16
              mr-5 md:mr-16
              bg-transparent
              "/>

          </div>
          {/* Dot background for testimonial section */}
          {/* <div className="h-[1700px] lg:h-[950px] absolute w-full top-[1200px]
            overflow-hidden -z-10">
              <div className="bg-transparent
              h-[1700px] lg:h-[950px]
              ml-5 md:ml-10
              mr-5 md:mr-10
              dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col items-center justify-center" />
            <div className="absolute inset-0 w-full" >
              <div className=" ml-5 md:ml-10
              mr-5 md:mr-10
              h-full bg-slate-100 dark:bg-[#17161b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
             </div>
          </div> */}
          
          <div className="flex flex-col items-center absolute top-[1700px] z-10">
            <h1 className="text-3xl font-extrabold mb-10">Loved by peers.</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col lg:pt-16 px-5">
                <MeteorCard title="Architect" desc="Did someone give Stevie Wonder a regular computer keyboard?" />
                <MeteorCard title="Test Engineer" desc="Idt he knows what a unit test is lmao." />
              </div>
              <div className="flex flex-col px-5">
                <MeteorCard title="Manager" desc="this guy sucks" />
                <MeteorCard title="Scrum Master" desc="It's a miracle he remembers to breathe, honestly." />
                <MeteorCard title="College Advisor" desc="My lawyer advised me not to comment if I want to keep my job." />
              </div>
              <div className="flex flex-col lg:mt-16 px-5">
                <MeteorCard title="Ex Wife" desc="He literally gambled the down payment for our first house on meme coins." />
                <MeteorCard title="Dog" desc="🐶 woof" />
              </div>
            </div>
          </div>

          
        </main>
      </div>
    );
  } catch(e) {
    console.log('error', e);
    return (
      <div className="tg-app-main-container w-full font-(family-name:--Inter)">
        <MenuBar />
        <main className="flex flex-col justify-center
        h-[calc(100vh-50px)]
        ml-5 md:ml-16
        mr-5 md:mr-16
        border-l border-r border-dashed border-[rgba(0,132,255,0.1)]
        overflow-scroll">
          <div className="flex animate-pulse space-x-4 py-5">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="flex animate-pulse space-x-4 py-5">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="flex animate-pulse space-x-4 py-5">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
