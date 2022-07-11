import React from 'react'

const Refresh = () => {
  return (
    <>
        <div className='xl:container mx-auto xl:px-12 grid lg:grid-cols-2 grid-cols-1'>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78945.jpg" className='h-full' alt="refresh" />
            </div>
            <div className='flex flex-col items-center justify-center gap-y-5 bg-bg-pink-two text-text-color lg:py-10 py-4 lg:px-20 px-8'>
                <h2 className='lg:text-5xl text-3xl tracking-wide font-bold mb-5 text-center'>Refresh on repeat</h2>
                <div className='lg:text-2xl text-xl leading-9 tracking-wide font-semibold text-center'>
                Our vibrant Strawberry Açaí Lemonade and Mango Dragonfruit Lemonade Starbucks Refreshers® beverages are oh so chill.
                </div>
                <a href="/" className='py-2 px-4 border border-text-color rounded-full leading-none lg:text-md text-sm font-bold flex transition-colors hover:bg-bg-pink hover:bg-opacity-20 mt-5'>Learn more</a>
            </div>
        </div>
    </>
  )
}

export default Refresh