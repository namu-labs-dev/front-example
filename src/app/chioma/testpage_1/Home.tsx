"use client"
import { message } from "antd";
import ChiomaHomeTemplate from "./ChiomaHomeTemplate"
import { DollarCircleFilled, MessageFilled, HistoryOutlined, WalletFilled } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";



const HomeComponent = () => {
    const router = useRouter()
    const headerLeftIconClicked = () => {
        void message.info("can't go back");
    };

    const headerRightIconClicked = () => {
      router.push('/chioma/testpage_2')
    };

    const footerIcons = [
        { icon: <DollarCircleFilled style={{color: "#ffffff7b"}}  />,  active: false },
        { icon: <MessageFilled style={{color: "#ffffff7b"}} />,  active: false },
        { icon: <WalletFilled style={{color: "#ffffffd6"}} />, active: true },
        { icon: <HistoryOutlined style={{color: "#ffffff7b"}} />,  active: false }
    ]
    const mappedIcons = footerIcons.map((iconObj, i) => (
        <Link href="" key={i} className={iconObj.active ? " border-t-2 innerr border-t-green-300 text-green-500 text-[25px] px-[20px]" : " text-[25px] px-[20px]"}>
            {iconObj.icon}
        </Link>
    ));


    const homeTemplateProps: React.ComponentProps<typeof ChiomaHomeTemplate> = {
        homeHeaderModuleProps: {
            headerProps: {
                title: "Proxima OS",
                headerClass: "bg-[#1F1F1F]",
                iconClass: "text-[#ffffffd6]",
                textClass: "text-[#ffff] font-medium",
                onClickLeftIcon: headerLeftIconClicked,
                onClickRightIcon: headerRightIconClicked,
            },
        },
        homeFooterModuleProps: { children: mappedIcons, footerClass: "bg-[#1F1F1F] items-baseline w-full flex justify-between " },
    }
    return <ChiomaHomeTemplate {...homeTemplateProps} />
}

export default HomeComponent
