import React from "react";
import { useState, useEffect, useRef } from "react";
import { FiEye, FiCopy, FiEdit2, FiTrash2 } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import {toast , Toaster} from "react-hot-toast";

const MobileTable = ({
  passArray,
  onDelete,
  onEdit,
  editId,
  isShow,
  onShow,
  onCopy,
}) => {
  return (
   
    <div className="md:hidden flex flex-col gap-4">
         <Toaster position="bottom-left"/>
      {passArray.map((item) => (
        <div
          key={item.id}
          className="bg-[#0f1117] border border-[#1f2430] rounded-lg p-4"
        >
          {/* Site */}
          <h2 className="text-white font-semibold text-lg">{item.site}</h2>

          {/* Username + Password (same line) */}
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="text-gray-400 truncate max-w-[45%]">
              {item.username}
            </span>

            <span className="text-gray-500 tracking-widest">
              {isShow === item.id
                ? item.password
                : "*".repeat(item.password.length)}
            </span>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-6 mt-4 text-gray-400">
            {isShow === item.id ? (
              <FiEyeOff
                className="hover:text-white cursor-pointer"
                onClick={() => {
                  onShow(item.id);
                }}
              />
            ) : (
              <FiEye
                className="hover:text-white cursor-pointer"
                onClick={() => {
                  onShow(item.id);
                }}
              />
            )}
              <FiCopy className="hover:text-blue-400 cursor-pointer" onClick={() => onCopy(item.password)}/>
            <FiEdit2
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => onEdit(item.id)}
            />
            <FiTrash2
              className="hover:text-red-500 cursor-pointer"
              onClick={() => onDelete(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTable;
