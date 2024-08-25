import { useState } from "react";

import { ChevronDown, Trash2 } from "lucide-react";
import UserInfo from "./components/UserInfo";
import { admins } from "./data";
import { Admin } from "./types";
import Tag from "./components/Tag";

function App() {
  const [adminsData, setAdminsData] = useState<Admin[]>(admins);
  const handleDelete = (id: number) => {
    const newAdmins = adminsData.filter((admin) => admin.id !== id);
    setAdminsData(newAdmins);
  };
  return (
    <main className="space-y-12">
      <h1 className="font-bold text-xl">List</h1>

      <table className="">
        <thead className="bg-[#484848] text-[#BABABA] text-[12px] font-normal">
          <tr className="h-[48px]">
            {tableHeaders.map((header) => (
              <th className="px-4 py-2 ">
                <div className="flex items-center text-center gap-2">
                  <p className="text-center">{header}</p>
                  {header && header !== "Name" && (
                    <ChevronDown className="size-4" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[#3C3C3C]">
          {adminsData.map((admin) => (
            <tr key={admin.id} className="h-[65px]">
              <td className="px-6 py-4 w-[30%] ">
                <UserInfo admin={admin} />
              </td>
              <td className="px-6 py-4 text-[#BABABA] text-[12px]">
                {admin.email}
              </td>
              <td className="px-6 py-4 text-sm flex items-center gap-3 text-center">
                <div className="bg-[#E3655C] w-[34px] h-[34px] rounded-full grid place-items-center">
                  {admin.teams
                    .split(" ")
                    .map((team) => team.charAt(0).toUpperCase())}
                </div>
                {admin.teams}
              </td>
              <td className="px-6 py-4">
                <div className="felx gap-2">
                  {admin.access.length <= 2
                    ? admin.access.map((access) => <Tag tagName={access}></Tag>)
                    : admin.access
                        .slice(0, 2)
                        .map((access) => <Tag tagName={access}></Tag>)}
                  {admin.access.length > 2 && (
                    <Tag tagName={`+${admin.access.length - 2}`}></Tag>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <button type="button" onClick={() => handleDelete(admin.id)}>
                  <Trash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;

const tableHeaders = ["Name", "Email", "Teams", "Access", ""];
