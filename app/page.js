
import taskData from "./../data/tasks.json";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-xl md:text-xl text-bold">Dashboard</h1>
      <div className="flex flex-row gap-2">

        <div className="px-4 py-2 bg-[var(--primary-color)] my-2 rounded-md text-white text-[14px] w-[65%]">
          65 Task Completed
        </div>
        <div className="px-4 py-2 bg-blue-100 my-2 rounded-md text-[var(--foreground)] text-[14px] w-[65%]">
          12 Task Left
        </div>
      </div>
      <h2 className="text-[16px] mt-4">You have got <span className="text-[var(--primary-color)]">5 task</span> today.</h2>
      <table className='table w-full mt-2'>
        <thead className="text-[12px] text-grey-100 ">
          <tr>
            <th className="py-2 px-4 w-[10%] text-left">ID</th>
            <th className="py-2 px-4 w-[20%] text-left">Title</th>
            <th className="py-2 px-4 w-[40%] text-left">Description</th>
            <th className="py-2 px-4 w-[20%] text-left">Status</th>
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
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
