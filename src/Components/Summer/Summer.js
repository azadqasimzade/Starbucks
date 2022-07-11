import React from 'react'

const Summer = () => {
  return (
    <>
        <div className='xl:container mx-auto xl:px-12 grid lg:grid-cols-2 grid-cols-1'>
            <div className='w-full h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78883.jpg" className='w-full h-full' alt="summer" />
            </div>
            <div className='flex flex-col items-center justify-center gap-y-5 py-9 bg-bg-color text-white'>
                <h1 className='lg:text-2xl text-xl font-bold text-center'>Turn Tuesdays into TuesYays with 50% off</h1>
                <div className='lg:text-lg text-md font-semibold tracking-wider leading-9 text-center'>Every Tuesday in July, Starbucks Rewards members can <br /> enjoy half off their favorite cold beverage.*</div>
                <a href="/" className='py-2 px-4 border rounded-full leading-none lg:text-md text-sm font-bold flex transition-colors hover:bg-gray-400 hover:bg-opacity-20'>Join now</a>
            </div>
        </div>
    </>
  )
}

export default Summer