import React from 'react'

const Uber = () => {
  return (
    <>
        <div className='xl:container mx-auto xl:px-12 grid lg:grid-cols-2 grid-cols-1'>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78800.jpg" className='h-full' alt="uber" />
            </div>
            <div className='flex flex-col items-center justify-center gap-y-3 bg-bg-uber text-text-color lg:py-10 py-4 lg:px-20 px-8'>
                <h2 className='lg:text-2xl text-xl tracking-wide font-bold mb-5 text-center'>Lean into that summer feeling</h2>
                <div className='lg:text-lg text-md leading-9 tracking-wide font-semibold text-center'>
                    Order Starbucks® drinks on Uber Eats today. **
                </div>
                <a href="/" className='py-2 px-4 border border-text-color rounded-full leading-none lg:text-md text-sm font-bold flex transition-colors hover:bg-gray-400 hover:bg-opacity-20 mt-5'>Order now</a>
            </div>
        </div>
    </>
  )
}

export default Uber