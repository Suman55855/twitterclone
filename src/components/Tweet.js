import React from "react";
import Avatar from "react-avatar";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Patel</h1>
              <p className="text-gray-500 text-sm ml-1">@patelmernstack . 1m</p>
            </div>
            <div>
              <p>Hello developers lets connect and grow together.</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <FaRegComment size="20px" />
                <p className="ml-1">0</p>
              </div>
              <div className="flex items-center">
                <FaRegHeart size="20px" />
                <p className="ml-1">0</p>
              </div>
              <div className="flex items-center">
                <FaRegBookmark size="20px" />
                <p className="ml-1">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
