"use client"
import React from 'react'
import Transaction from './Transaction'
import { message } from 'antd';
import { DollarCircleFilled, HistoryOutlined, MessageFilled, WalletFilled } from '@ant-design/icons';
import Link from 'next/link';

const TransactionPage = () => {
    const headerLeftIconClicked = () => {
        void message.info("can't go back");
    };

    const headerRightIconClicked = () => {
        void message.info("can't go Settings");
    };

    const footerIcons = [
        { icon: <DollarCircleFilled style={{color: "#ffffff7b"}}  />,  active: false },
        { icon: <MessageFilled style={{color: "#ffffff7b"}} />,  active: false },
        { icon: <WalletFilled style={{color: "#ffffffd6"}} />, active: true },
        { icon: <HistoryOutlined style={{color: "#ffffff7b"}} />,  active: false }
    ]
    const mappedIcons = footerIcons.map((iconObj, i) => (
        <Link href="" key={i} className={iconObj.active ? "text-[#ffffffd6] border-t-2 border-t-green-300 text-[25px] px-[20px]" : "  text-[25px] px-[20px]"}>
            {iconObj.icon}
        </Link>
    ));
    const transactionTemplateProps: React.ComponentProps<typeof Transaction> = {
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
        homeFooterModuleProps: { children: mappedIcons, footerClass: "bg-[#1F1F1F] items-baseline w-full flex justify-between ", footerChildClass: "text-[#ffffff64]" },
    }
    return (<Transaction {...transactionTemplateProps} />
    )
}

export default TransactionPage
