import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav>
       <div className="bg-white p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex gap-3">
        <img src="/assets/Talk.svg" alt="" />
        <div>
           <div className="d-flex align-items-center gap-2">
            <img src="/assets/Group.svg" alt="" />
            <h2 className='mb-0'>PARENTUNE</h2>
           </div>
        </div>
        </div>
        <div className='d-flex gap-4'>
            <div>
            <img src="/assets/Search.svg" alt="" />
            </div>
            <div>
            <img src="/assets/Filled.svg" alt="" />
            </div>
        </div>
       </div>
    </nav>
    </>
  )
}

export default NavBar
