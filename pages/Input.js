import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Input() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      name: "Sam",
      username: "Sam@1",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE2MeDKG-GnEA/profile-displayphoto-shrink_200_200/0/1658045991027?e=1670457600&v=beta&t=-T5_jLvnIl_hYepjgEa4Xtb3K2P401C4u0Bw3nx8Zps",
      img: tweetImg,
      text: tweetMessage,
      timestamp: new Date().toLocaleString(),
    };

    await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    setTweetMessage("");
    setTweetImg("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTweetImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex border-b p-3 border-gray-200 space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-11 w-11"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
        />
      </svg>

      <div className="w-full divide-y divide-gray-200">
        <form>
          <div>
            <textarea
              className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
              rows="2"
              placeholder="write something..."
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <label htmlFor="file-upload" className="cursor-pointer">
                <PhotoIcon className="h-10 w-10 hover-effect p-2 text-sky-400 hover:bg-sky-100 pt-2.5" />
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              <FaceSmileIcon className="h-10 w-10 hover-effect p-2 text-sky-400 hover:bg-sky-100" />
            </div>
            <button
              className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
              disabled={tweetMessage.length === 0}
              onClick={sendTweet}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
