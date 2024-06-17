import Image from 'next/image'
import React from 'react'

const Modal = () => {
    return (
        <main className='absolute bg-black w-full bg-opacity-25 flex items-center justify-center h-[100vh] '>
            <section className='bg-[#2C2D30] w-[90%] h-fit rounded-lg flex items-center justify-center flex-col py-[10px]'>
               <h4 className='text-[25px] font-bold text-[#fffffff2]'>Transaction <br /> Processing</h4>
               <div>
                <Image src="/svgs/node.svg" alt='node' width={400} height={100}/>
               </div>
              <div className='text-center text-white mt-[10px] text-[15px]'>
              <p>Uploading your transaction to the node.</p>
               <p>Pleasw wait for a moment...</p>
               <p>This may take up to 2 minutes.</p>
              </div>
            </section>

        </main>
    )
}

export default Modal
