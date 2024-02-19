"use client";
import { fetchSongInfo } from "@/lib/Redux/musicSlice";
import React from "react";

import { FaPlus, FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export default function SongComponent({ name, album, image, id, index }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-6 p-3 shadow-md border-b border-white mx-4  font-dm rounded">
      <p className="mr-5">{index + 1}</p>
      <div className="flex items-center justify-between flex-1">
        <img src={image[1].link} className="h-[50px] w-[50px]" />
        <p className="text-center">{name}</p>
        <p className="hidden md:block ">{album.name}</p>
        <div className="hidden md:block"></div>
      </div>
      <div className="flex items-center gap-10 md:mr-5 ">
        <FaPlay
          size={20}
          className="hover:duration-300 hover:scale-125 rounded "
          onClick={() => {
            dispatch(fetchSongInfo(id));
          }}
        />
        <FaPlus
          size={20}
          className="hover:duration-300 hover:scale-125 rounded "
        />
      </div>
    </div>
  );
}