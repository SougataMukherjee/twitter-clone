import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { News } from "./News";
export const Widgets = ({ res, randomUser }) => {
  const [articleNum, setArticleNum] = useState(2);
  const [randUserNum, setRandUserNum] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 py-1.5 z-10">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <BiSearch className="h-5 z-10 text-gray-500" onClick={() => {}} />
          <input
            className="absolute inset-0 rounded-full pl-10 border-gray-500 text-gray-700 focus:shadow-md"
            type="text"
            placeholder="twitter"
          />
        </div>
      </div>

      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl p-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-lg px-4">whats Happening</h4>
        {res.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 2)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-500"
        >
          Show More
        </button>
      </div>
      <div className="sticky top-20 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-lg px-4">Who to follow?</h4>
        {randomUser.results.slice(0, randUserNum).map((user) => (
          <div
            key={user.id}
            className="flex item-center px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            <img
              className="rounded-full"
              width="40"
              src={user?.picture?.thumbnail}
              alt=""
            />
            <div className="truncate ml-4 leading-5">
              <h4 className="font-bold hover:underline text-[14px]">
                {user.login.username}
              </h4>
              <h5 className="text-[13px] text-gray-500 truncate">
                {user.name.first + "" + user.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
              follow
            </button>
          </div>
        ))}
        <button
          onClick={() => setRandUserNum(randUserNum + 3)}
          className="text-blue-300 pl-4 hover:text-blue-300"
        >
          Show More
        </button>
      </div>
    </div>
  );
};
