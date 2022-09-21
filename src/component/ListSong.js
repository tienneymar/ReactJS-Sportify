import React, { useContext, useState, useEffect } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);

  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <>
      <div className="col-span-2  overflow-y-scroll">
        <table className="table-auto w-full">
          <thead className="text-white h-12">
            <tr>
              <th className="w-[10%]">STT</th>
              <th className="text-left">Tên Bài Hát</th>
              <th className="w-[10%]">Nghệ Sĩ</th>
              <th className="w-[10%]">
                <i className="fa fa-download"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {DataSongs.map((song, index) => (
              <tr
                key={index}
                className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${
                  idSong === song.id && "bg-slate-600 text-teal-400"
                }`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td className="text-center">{index + 1}</td>
                <td>{song.name}</td>
                <td className="text-center">{song.author}</td>
                <td className="text-center">
                  <a href={song.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
