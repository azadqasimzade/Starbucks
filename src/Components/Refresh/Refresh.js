import React from 'react'

const Refresh = () => {
  return (
    <>
        <div className='container mx-auto px-12 grid grid-cols-2'>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78945.jpg" className='h-full' alt="refresh" />
            </div>
            <div className='flex flex-col items-center justify-center gap-y-5 bg-bg-pink-two text-text-color py-10 px-20'>
                <h2 className='text-5xl tracking-wide font-bold mb-5 text-center'>Refresh on repeat</h2>
                <div className='text-2xl leading-9 tracking-wide font-semibold text-center'>
                Our vibrant Strawberry Açaí Lemonade and Mango Dragonfruit Lemonade Starbucks Refreshers® beverages are oh so chill.
                </div>
                <a href="/" className='py-2 px-4 border border-text-color rounded-full leading-none text-md font-bold flex transition-colors hover:bg-bg-pink hover:bg-opacity-20 mt-5'>Learn more</a>
            </div>
        </div>
    </>
  )
}

export default Refresh