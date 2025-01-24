"use client"
import Image from "next/image";
import taskData from "./../data/tasks.json";
import { TotalTasks } from "./components/TotalTasks";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-xl md:text-xl text-bold">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2">
          <h2 className="text-[16px] mt-4">You have got <span className="text-[var(--primary-color)]">5 task</span> today.</h2>
          <div className="overflow-x">
            <table className='table-auto overflow-scroll w-full mt-2'>
              <thead className="text-[12px] text-grey-100 ">
                <tr>
                  <th className="py-2 px-4 w-[10%] text-left">ID</th>
                  <th className="py-2 px-4 w-[20%] text-left">Title</th>
                  <th className="py-2 px-4 w-[40%] text-left">Description</th>
                  <th className="py-2 px-4 w-[10%] text-left">Status</th>
                  <th className="py-2 px-4 w-[10%] text-left">Image</th>
                </tr>
              </thead>
              <tbody className="text-[14px] border border-color-[#eee] border-rounded">
                {taskData.length === 0 ? (
                  <tr className="border-b-1 border-color-[#eee]">
                    <td colSpan="4">No tasks available</td>
                  </tr>
                ) : (
                  taskData.map(task => (
                    <tr key={task.id} className="">
                      <td className="py-2 px-4 border-b border-color-[#eee]">{task.id}</td>
                      <td className="py-2 px-4 border-b border-color-[#eee]">{task.title}</td>
                      <td className="py-2 px-4 border-b border-color-[#eee]">{task.description}</td>
                      <td className="py-2 px-4 border-b border-color-[#eee]">{task.status}</td>
                      <td className="py-2 px-4 border-b border-color-[#eee]">
                        <Image src={`${task.image}`} width={40} height={40} alt={task.title} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border border-color-[#eee] rounded-md p-4">
          <h2 className="text-[16px] mb-4">Total Tasks (240)</h2>
          <TotalTasks />
        </div>
      </div>
    </div>
  );
}
