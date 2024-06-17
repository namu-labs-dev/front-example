import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'


interface schemaProp {
    title: string,
    src: string,
    timeStamp: string,
    desc: string,
    alt: string,
    badge: boolean
}


const ChiomaHomeContent = () => {
    const textStyle = {
        whiteSpace: 'nowrap', // Prevent line breaks
        overflow: 'hidden', // Hide overflowing content
        textOverflow: 'ellipsis', // Add ellipsis for overflow
    };

    const schema: schemaProp[] = [
        {
            title: "ETH",
            src: "/imgs/eth.png",
            timeStamp: "08:42 PM",
            desc: "User:namulabs is a fantastic company lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet",
            alt: "eth",
            badge: true

        },
        {
            title: "Nvir",
            src: "/imgs/nvir.png",
            timeStamp: "08:43 PM",
            desc: "User:namulabs is a fantastic company lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet",
            alt: "eth",
            badge: false

        }
    ]

    return (
        <main className='bg-[#1F1F1F] h-[72vh] w-full'>
            <section className=' p-[20px]'>
                <h2 className='text-[25px] font-bold text-white mb-[9px]'>Messages</h2>
                <Image src="/imgs/star.png" alt='star' width={50} height={50} />
                <p className='text-white text-[16px] mt-[3px]'>Proxima</p>
            </section>
            <section className='bg-[#2C2D30] p-[20px] h-full rounded-t-[40px] text-white'>
                {schema.map((item, i) => {
                    return (
                        <section key={i} className='flex gap-3 mb-[15px]'>
                            <div>
                                <Image src={item.src} alt={item.alt} width={item.title === "Nvir" ? 50 : 50} height={item.title === "Nvir" ? 50 : 50} />
                            </div>
                            <section>
                                <div className='flex justify-between w-full'>
                                    <p className='mb-[3px] font-semibold'>{item.title}</p>
                                    <p>{item.timeStamp}</p>
                                </div>
                                <div  className='text-[#ffffffa4] w-full flex items-center font-medium '>
                                    <p style={textStyle} className='sm:max-w-[350px] max-w-[200px]'>
                                    {item.desc}
                                    </p>
                                    {item.badge && <div>
                                        <Image src="/svgs/Count.svg" alt="badge" width={20} height={20}/>
                                        </div>}
                                </div>
                            </section>
                        </section>
                    )
                })}
            </section>
        </main>
    )
}

export default ChiomaHomeContent
