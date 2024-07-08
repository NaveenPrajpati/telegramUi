import React from "react";
import { FaFileDownload } from "react-icons/fa";
import {
  formatDate,
  getRandomColorAndInitials,
} from "../utils/utilityFunction";

const ChatItem = ({ item, onClick, selected }) => {
  const name = item.creator.name;
  const time = formatDate(item.updated_at);
  const message = item.creator.email;
  const unread = item.msg_count;
  const data = getRandomColorAndInitials(name);
  return (
    <div
      onClick={onClick}
      className={`flex flex-row items-center gap-x-2 mt-2 cursor-pointer 
      ${selected == item.id ? " bg-blue-400 " : ""}
      hover:bg-gray-100 p-2 rounded-lg`}
    >
      <div
        style={{ backgroundColor: data.color, opacity: 0.7 }}
        className="h-14 w-14 flex justify-center items-center text-xl font-extrabold rounded-full bg-gray-300  text-white bg-gradient-to-r"
      >
        {data.initials ? (
          data.initials
        ) : (
          <FaFileDownload className=" text-white" size={20} />
        )}
      </div>
      <div className={` ${selected == item.id ? "text-white" : ""} w-[85%]`}>
        <div className="flex justify-between">
          <p
            className={` ${
              selected == item.id ? "text-white" : "text-black"
            }  font-medium`}
          >
            {name?.substring(0, 28)}
            {name?.length > 28 ? "..." : ""}
          </p>
          <p
            className={` ${
              selected == item.id ? "text-white" : "text-gray-500"
            } text-[12px]`}
          >
            {time}
          </p>
        </div>
        <div className="flex justify-between items-center ">
          <p
            className={` ${
              selected == item.id ? "text-white" : "text-gray-500"
            } `}
          >
            {message.substring(0, 28)}
            {message.length > 28 ? "..." : ""}
          </p>
          {selected != item.id && (
            <p className="bg-blue-400 px-2 text-white font-bold  rounded-full">
              {unread}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
