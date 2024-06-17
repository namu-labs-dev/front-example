"use client"
import React from 'react'
import { Select, Input, Button, Upload } from 'antd'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { CameraFilled } from '@ant-design/icons';


const { TextArea } = Input;

const FormPage = () => {
    return (
        <main>
            <header className='text-center font-bold py-[10px]'>
                <p>Vote</p>
            </header>
            <section>
                <div className='bg-[#F0F5FF] p-[15px] '>
                    <p>
                        <span className='text-[#2F54EB] font-medium'>10 FAO</span> will be deducted when voting is generated (Amount: 9 FAO)
                    </p>
                </div>
                <form action="" className='p-[15px] flex flex-col gap-[20px]'>
                    <div>
                        <label htmlFor="" className='font-medium mb-[4px]'>Category</label> <br />
                        <Select showSearch
                            className='w-full'
                            placeholder="Birthday AD"
                            optionFilterProp="children"
                            options={[
                                {
                                    value: 'value1',
                                    label: 'value1',
                                },
                                {
                                    value: 'value2',
                                    label: 'value2',
                                }
                            ]}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium mb-[4px]'>Vote Title</label> <br />
                        <Input placeholder="Title" />
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium mb-[4px]'>Image</label>
                        <Dragger className=" text-gray-400 h-[200px]">
                            <CameraFilled className='text-[25px] text-gray-300 h-[150px]'/>
                        </Dragger>
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium mb-[4px]'>Description</label>
                        <TextArea rows={4} placeholder="Please write down a description of the event" maxLength={6} />
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium mb-[4px]'>Start</label> <br />
                        <Space direction="vertical" className='w-full'>
                            <DatePicker placeholder='2024-09-06' className='w-full' />
                        </Space>
                    </div>
                    <Button type="primary" block className='py-[10px]'>Create Vote</Button>
                </form>
            </section>
        </main>
    )
}

export default FormPage
