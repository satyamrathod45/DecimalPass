import React from 'react'
import { FiEye, FiCopy, FiEdit2, FiTrash2 } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";


const DesktopTable = ({passArray , onDelete , onEdit, editId , isShow , onShow , onCopy}) => {

  return (
    <div className="hidden md:block">
  <table className="w-full border-collapse text-left">
    <thead>
      <tr className="border-b border-[#1f2430] text-gray-400 uppercase text-sm">
        <th className="p-4">Site</th>
        <th className="p-4">Username</th>
        <th className="p-4">Password</th>
        <th className="p-4 text-right">Actions</th>
      </tr>
    </thead>

    <tbody>
      {passArray.map(item => (
        <tr
          key={item.id}
          className={`odd:bg-[#0f1117] even:bg-[#141826] hover:bg-[#1b2030] transition ${editId === item.id && "border-2 scale-105 border-white"}`}
        >
          <td className="p-4 text-white">{item.site}</td>
          <td className="p-4 text-gray-300">{item.username}</td>
          <td className="p-4 text-gray-400 tracking-widest">{isShow === item.id ? item.password : "*".repeat(item.password.length)}</td>

          <td className="p-4">
            <div className="flex justify-end gap-4 text-gray-400">
             {isShow===item.id ? <FiEyeOff className="hover:text-white cursor-pointer" onClick={() => {onShow(item.id)}}/>:<FiEye className="hover:text-white cursor-pointer" onClick={() => {onShow(item.id)}}/>}
              <FiCopy className="hover:text-blue-400 cursor-pointer" onClick={() => onCopy(JSON.stringify({
                username:item.username,
                pass: item.password
              }))}/>
              <FiEdit2 className="hover:text-yellow-400 cursor-pointer" 
              onClick={() => onEdit(item.id)}/>
              <FiTrash2
                className="hover:text-red-500 cursor-pointer"
                onClick={() => onDelete(item.id)}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default DesktopTable