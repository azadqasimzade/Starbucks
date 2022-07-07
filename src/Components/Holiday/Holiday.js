import React from 'react'

const Holiday = () => {
  return (
    <>
        <div className='container mx-auto px-12 grid grid-cols-2'>
            <div className='flex flex-col items-center justify-center gap-y-5 bg-bg-pink text-white py-10 px-20'>
                <h2 className='text-5xl tracking-wide font-bold mb-5 text-center'>Cold brew for two</h2>
                <div className='text-2xl leading-9 tracking-wide font-semibold text-center'>
                 Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream.
                </div>
                <a href="/" className='py-2 px-4 border rounded-full leading-none text-md font-bold flex transition-colors hover:bg-gray-400 hover:bg-opacity-20 mt-5'>Learn more</a>
            </div>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78943.jpg" className='h-full' alt="cream" />
            </div>
        </div>
    </>
  )
}

export default Holiday