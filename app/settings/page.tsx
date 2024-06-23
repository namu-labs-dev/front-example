import React from "react";
import SettingsLayout from "./SettingsLayout";
import Link from "next/link";

const Settings = () => {
  return (
    <SettingsLayout>
      <div className="py-7">
        <Link href="/" className="px-[25px]">Go back</Link>
        <h1 className="text-center font-bold">Vote</h1>
        <div className="bg-[#F0F5FF] px-[25px] py-7 mt-4">
          <span className="text-Blue_color text-bold">10 FAO</span> will be deducted when voting is generated (Amount
          : 9 FAO)
        </div>
        <form className="py-7 px-[25px] lg:w-[50%] mx-auto">
          <div className="flex flex-col mb-5">
            <label htmlFor="Category" className="mb-2">
              Category
            </label>
            <input
              type="text"
              placeholder="Birthday AD"
              className="border border-gray-500 py-2 px-3 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="Vote Title" className="mb-2">
              Vote Title
            </label>
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-500 py-2 px-3 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="Image" className="mb-2">
              Image
            </label>
            <input
              type="image"
              src="/image.png"
              alt="Submit"
              className="w-full h-[50px] mt-4"
            />
          </div>

          <div className="w-full mt-5">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="block w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 resize-vertical"
              rows={2} // Initial rows
              placeholder="Please write down a description of the event"
            />
          </div>

          <div className="w-full mt-5 flex flex-col">
            <label htmlFor="Start" className="mb-2">
              Start
            </label>
            <input
              type="date"
              name="date"
              className="border border-gray-500 py-2 px-3 rounded-md"
            />
          </div>

          <button className="bg-[#2F54EB] text-white mt-5 w-full py-3 px-3 rounded-md">
            Create Vote
          </button>
        </form>
      </div>
    </SettingsLayout>
  );
};

export default Settings;
