"use client";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { LoadingIcon, RenderMessageAtom } from "~/components/Atoms/David";
import DrawerAtom from "~/components/Atoms/DrawerAtom/DrawerAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import ToastStore from "~/store/ToastStore";
import { Messages, messages } from "~/utils/data";

type Props = {
  activeIndex: number;
};

const HomeDrawerModule = ({ activeIndex }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchedMessages, setFetchedMessages] = useState<Messages[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setFetchedMessages([...messages]);
      } catch (error) {
        ToastStore.info("Unable to fetch messages, please try again");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsDrawerOpen(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {activeIndex === 2 && (
        <>
          <div className="flex flex-col items-start justify-start">
            <h1 className="mb-6 text-2xl font-semibold">Messages</h1>
            <SVGAtom
              iconName="proximaIcon"
              width={65}
              height={65}
              className="cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
            <p className="mt-2 text-base">Proxima</p>
          </div>
          <DrawerAtom
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            containerClassName="h-4/5 max-h-[649px] flex flex-col !bg-[#2C2D30] p-4 text-white"
          >
            <X
              className="absolute right-3 top-3 z-10 cursor-pointer"
              onClick={() => setIsDrawerOpen(false)}
            />
            <div className="my-4 h-full">
              {loading ? (
                <LoadingIcon />
              ) : (
                <div className="overflow-y-auto">
                  {fetchedMessages.map((message, idx) => (
                    <RenderMessageAtom key={idx} message={message} />
                  ))}
                </div>
              )}
            </div>
          </DrawerAtom>
        </>
      )}
    </>
  );
};

export default HomeDrawerModule;
