import React, { useEffect, useState } from "react";
import { FaFileDownload, FaTelegram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { chatItems } from "../utils/constants";
import ChatItem from "../components/ChatItem";
import axios from "axios";
import { formatDate } from "../utils/utilityFunction";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import MenuBox from "../components/MenuBox";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/slices/chatSlice";

export default function ContactList() {
  const [allChats, setAllChats] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://devapi.beyondchats.com/api/get_all_chats?page=1")
      .then((res) => {
        console.log(res.data);
        setAllChats(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onPress(item) {
    dispatch(setSelectedUser(item));
    setSelected(item.id);
  }

  return (
    <div className="w-full sm:w-[400px] md:w-[620px] h-screen bg-white p-2 overflow-scroll">
      <div className=" relative flex justify-between items-center">
        <MenuBox isOpen={openMenu} />
        <IoIosMenu
          size={30}
          fontWeight={"800"}
          onClick={() => setOpenMenu((pre) => !pre)}
          className=" font-bold text-gray-500"
        />

        <div className="flex  rounded-full bg-gray-100 w-[90%] items-center p-2">
          <div className="p-2 rounded-full  h-full">
            <IoIosSearch className=" text-gray-500" />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="w-full px-2 bg-gray-100 outline-none "
            placeholder="Search"
          />
        </div>
      </div>
      <div className=" overflow-y-scroll no-scrollbar h-full">
        {allChats.map((item, index) => (
          <ChatItem
            item={item}
            selected={selected}
            onClick={() => onPress(item)}
          />
        ))}
      </div>
    </div>
  );
}
