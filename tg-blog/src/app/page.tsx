/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link'
import MenuBar from './menubar';
import { DataTable } from '@/components/ui/data-table';
import { columns } from '@/components/ui/data-table.d';
import { Boxes } from '@/components/ui/background-boxes';
import { HardHat, Construction } from 'lucide-react';
import { GlowingStarsBackground } from '@/components/ui/glowing-star-bg';
import MeteorCard from '@/components/ui/meteor-card';


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
        h-[2850px] lg:h-[2100px]">
        <MenuBar />
        <main className="flex flex-col items-center
        ml-5 md:ml-10
        h-full
        mr-5 md:mr-10
        border-l border-r border-dashed border-[rgba(0,132,255,0.1)]
        overflow-hidden z-10">
          <h1 className="font-extrabold flex flex-row my-5"><Construction />&nbsp;UNDER CONSTRUCTION&nbsp;<Construction /></h1>
          <div className="w-full 
            pl-5 md:pl-10
            pr-5 md:pr-10
          absolute flex flex-col items-center overflow-hidden z-30 top-20">
            <DataTable columns={columns} data={postTitles.map((post: any, ind: any) => {
              const parts = post.split("---");
              return {id: ind, title: parts[1], desc: parts[2], date: parts[0], url: encodeURIComponent(post)}
            })}/>
          </div>



          <div className="h-[1700px] lg:h-[950px] absolute w-full top-[1200px]
            overflow-hidden z-0">
              
            <GlowingStarsBackground className="h-[1700px] lg:h-[950px] top-[1200px]
              ml-5 md:ml-10
              mr-5 md:mr-10
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
          
          <div className="flex flex-col items-center absolute top-[1300px] z-10">
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
        ml-5 md:ml-10
        mr-5 md:mr-10
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
