import React from 'react'


function Home() {
    return (
        <div className='container-fluid'>
            <div className='row bg-light rounded'>
                <div className='col-lg-4 col-sm-12 p-3'>
                    <img className='img-fluid' src='https://i.pinimg.com/474x/98/5b/8b/985b8b758ca084adea70990b59bf8c0f.jpg' alt='book' width="80%" />
                </div>
                <div className='col-lg-8 col-sm-12 p-5 text-start'>
                    <p className='text-blue p-5'><q className='fw-bold fs-1'>A book is a gift you can open again and again.</q>
                        <p className='text-end'>...Garrison Kellor</p>
                    </p>



                </div>
            </div>            
        </div>
    )
}

export default Home