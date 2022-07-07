import React from 'react'

const Uber = () => {
  return (
    <>
        <div className='container mx-auto px-12 grid grid-cols-2'>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78800.jpg" className='h-full' alt="uber" />
            </div>
            <div className='flex flex-col items-center justify-center gap-y-3 bg-bg-uber text-text-color py-10 px-20'>
                <h2 className='text-2xl tracking-wide font-bold mb-5 text-center'>Lean into that summer feeling</h2>
                <div className='text-lg leading-9 tracking-wide font-semibold text-center'>
                    Order Starbucks® drinks on Uber Eats today. **
                </div>
                <a href="/" className='py-2 px-4 border border-text-color rounded-full leading-none text-md font-bold flex transition-colors hover:bg-gray-400 hover:bg-opacity-20 mt-5'>Order now</a>
            </div>
        </div>
    </>
  )
}

export default Uber