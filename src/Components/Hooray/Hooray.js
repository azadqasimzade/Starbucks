import React from 'react'

const Hooray = () => {
  return (
    <>
        <div className='container mx-auto px-12 grid grid-cols-2'>
        <div className='flex flex-col items-center justify-center gap-y-5 bg-hover-color text-white py-10 px-20'>
                <h2 className='text-5xl tracking-wide font-bold mb-5 text-center'>Hooray for cookies and cake</h2>
                <div className='text-2xl leading-9 tracking-wide font-semibold text-center'>
                    The new Cookies & Cream Cake Pop is a happy mix of chocolate cake, crumbled cookies and white chocolaty icing.
                </div>
                <a href="/" className='py-2 px-4 border rounded-full leading-none text-md font-bold flex transition-colors hover:bg-gray-400 hover:bg-opacity-20 mt-5'>Order now</a>
            </div>
            <div className='h-full'>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78799.jpg" className='h-full' alt="hooray" />
            </div>
        </div>
    </>
  )
}

export default Hooray