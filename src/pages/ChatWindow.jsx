import React, { useEffect, useState } from "react";
import { FaFileDownload, FaRegSmile } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuMic } from "react-icons/lu";
import { RiAttachment2 } from "react-icons/ri";
import { useSelector } from "react-redux";
import ChatItem from "../components/ChatItem";
import {
  formatDate,
  getRandomColorAndInitials,
} from "../utils/utilityFunction";
import axios from "axios";
import { IoTriangle } from "react-icons/io5";

export default function ChatWindow() {
  const { selectedUser } = useSelector((state) => state.chatState);
  const data = getRandomColorAndInitials(selectedUser?.creator?.name);

  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${selectedUser.id}`
      )
      .then((res) => {
        console.log(res.data.data);
        setAllMessages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedUser]);

  return (
    <div className=" w-0  sm:w-full h-screen bg-green-200  relative">
      <img
        src={require("../assets/tele5.jpg")}
        alt=""
        className=" absolute z-0 object-fill h-full w-full"
      />
      <div className=" z-10 flex flex-col justify-between absolute w-full h-full">
        {Object.keys(selectedUser).length != 0 && (
          <div className=" w-full bg-white border">
            <div className="flex flex-row items-center gap-x-2  cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
              <div
                style={{ backgroundColor: data.color, opacity: 0.7 }}
                className="h-12 w-12 flex justify-center items-center text-xl font-extrabold rounded-full bg-gray-300  text-white bg-gradient-to-r"
              >
                {data.initials ? (
                  data.initials
                ) : (
                  <FaFileDownload className=" text-white" size={20} />
                )}
              </div>
              <div className=" w-[85%]">
                <p className="text-black  font-medium">
                  {selectedUser?.creator?.name?.substring(0, 28)}
                  {selectedUser?.creator?.name?.length > 28 ? "..." : ""}
                </p>
                <p className="text-gray-500 ">
                  {selectedUser?.creator?.email?.substring(0, 28)}
                  {selectedUser?.creator?.email?.length > 28 ? "..." : ""}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className=" overflow-y-scroll no-scrollbar  h-full  px-2 max-w-[700px]  w-full mx-auto">
          {allMessages.map((item, index) => (
            <div
              key={index}
              className={`w-full flex font-normal text-gray-800  ${
                selectedUser.creator.id == item.sender_id
                  ? " justify-end"
                  : " justify-start"
              }    mt-2`}
            >
              <div
                className={`
                ${
                  selectedUser.creator.id == item.sender_id
                    ? " bg-green-100"
                    : " bg-white"
                }
                 pt-1 px-2 max-w-[400px] rounded-xl relative`}
              >
                <p className=" ">{item.message}</p>

                <p className=" text-[10px] text-end ">
                  {formatDate(item.created_at)}
                </p>

                <IoTriangle
                  size={20}
                  className={`absolute text-white -bottom-[1.5px] ${
                    selectedUser.creator.id === item.sender_id
                      ? "-right-[7px] text-green-100"
                      : "-left-[7px] text-white"
                  }
          `}
                />
              </div>
            </div>
          ))}
        </div>

        <div className=" h-16 max-w-[700px] w-full mx-auto bg-transparent flex items-center gap-x-3 p-1 mb-4 mt-1">
          <div className=" relative flex items-center bg-white p-2 rounded-xl w-full gap-x-4">
            <div className="bg-blue-400 p-1 rounded-lg">
              <GiHamburgerMenu size={15} className="  text-white " />
            </div>
            <FaRegSmile size={22} className=" text-gray-500" />
            <input
              type="text"
              name=""
              id=""
              className=" w-full p-1 outline-none font-semibold text-gray-700"
              placeholder="Message"
            />
            <RiAttachment2 size={25} className=" text-gray-500" />
            <IoTriangle
              size={20}
              className={`absolute text-white -bottom-[1.5px] -right-[8px]
          `}
            />
          </div>
          <div className="bg-white p-3 rounded-full">
            <LuMic size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
