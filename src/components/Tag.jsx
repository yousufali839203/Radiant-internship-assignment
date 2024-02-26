import React from 'react'

function Tag({tagIcon, tagName}) {
  return (
    <>
      <div className=' absolute p-2 -top-14 flex justify-center items-center gap-2 text-white rounded-r-lg bg-[#FF7724]'>
        <img src={tagIcon} alt='iImage'/>
        <p>{tagName}</p>
      </div>
    </>
  )
}

export default Tag
