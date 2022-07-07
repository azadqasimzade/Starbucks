import React from 'react'

const Summer = () => {
  return (
    <>
        <div className='container mx-auto px-12 grid grid-cols-2'>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78883.jpg" className='h-full' alt="summer" />
            </div>
            <div className='flex flex-col items-center justify-center gap-y-5 py-9 bg-bg-color text-white'>
                <h1 className='text-2xl font-bold'>Turn Tuesdays into TuesYays with 50% off</h1>
                <div className='text-lg font-semibold tracking-wider leading-9 text-center'>Every Tuesday in July, Starbucks Rewards members can <br /> enjoy half off their favorite cold beverage.*</div>
                <a href="/" className='py-2 px-4 border rounded-full leading-none text-md font-bold flex transition-colors hover:bg-gray-400 hover:bg-opacity-20'>Join now</a>
            </div>
        </div>
    </>
  )
}

export default Summer