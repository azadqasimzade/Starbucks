import React from 'react'

const Holiday = () => {
  return (
    <>
        <div className='xl:container mx-auto xl:px-12 grid lg:grid-cols-2 grid-cols-1'>
            <div className='flex flex-col items-center justify-center gap-y-5 bg-bg-pink text-white lg:py-10 py-4 lg:px-20 px-8'>
                <h2 className='lg:text-5xl text-3xl tracking-wide font-bold mb-5 text-center'>Cold brew for two</h2>
                <div className='lg:text-2xl text-xl leading-9 tracking-wide font-semibold text-center'>
                 Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream.
                </div>
                <a href="/" className='py-2 px-4 border rounded-full leading-none lg:text-md text-sm font-bold flex transition-colors hover:bg-gray-400 hover:bg-opacity-20 mt-5'>Learn more</a>
            </div>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78943.jpg" className='h-full' alt="cream" />
            </div>
        </div>
    </>
  )
}

export default Holiday