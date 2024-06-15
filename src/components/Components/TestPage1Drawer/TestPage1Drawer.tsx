import { Badge, Button } from "antd";
import DrawerAtom from "~/components/Atoms/DrawerAtom/DrawerAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import type * as svgs from "public/svgs";

type Props = {
  drawerProps: React.ComponentProps<typeof DrawerAtom>;
  title: string;
  description: string;
};


const data: {
  icon: keyof typeof svgs;
  title: string;
  body: string;
  time: string;
  badge?: number;
}[] = [
  {
    icon: "eth",
    title: "ETH",
    body: "User: namulabs is fantasic company...",
    time: "08:43 PM",
    badge: 2,
  },
  {
    icon: "nvir",
    title: "Nvir",
    body: "User: namulabs is fantasic company...",
    time: "08:43 PM",
  },
];

export const TestPage1Drawer = (props: Props) => {
  return (
    <DrawerAtom {...props.drawerProps}>
      <div className="flex h-fit w-full flex-col gap-4 p-8">
        {data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="flex h-[74px] flex-row items-center">
              <div className="h-[44px] w-[44px] items-center justify-center align-middle">
                <SVGAtom iconName={item.icon} />
              </div>
              <div className="ml-4 flex w-max  flex-1 flex-col">
                <div className=" flex h-[26px] flex-row  justify-between">
                  <div className="font-Pretendard text-left text-[16px] font-bold leading-[26px] text-white">
                    {item.title}
                  </div>
                  <div className="font-inter text-left text-[14px] font-normal leading-[16.94px] text-white">
                    {item.time}
                  </div>
                </div>

                <div className=" flex h-[26px] flex-row  justify-between">
                  <div className="font-Pretendard text-left text-[14px] font-[500] leading-[22px] text-[#BFBFBF]">
                    {item.body}
                  </div>
                  <div className="font-inter text-left text-[14px] font-normal leading-[16.94px] text-white">
                    <Badge count={item?.badge}  />
                    {/* {item.time} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
{/* 
        <p>{props.description}</p>
        <Button onClick={() => props.drawerProps.setIsDrawerOpen(false)}>
          close
        </Button> */}
      </div>
    </DrawerAtom>
  );
};
