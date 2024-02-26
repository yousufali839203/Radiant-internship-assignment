import React from 'react'
import StarI from "../assets/star-icon.svg";
import StarHI from "../assets/star-half-icon.svg";
import StarEI from "../assets/star-empty-icon.svg";

function ReviewTag({rating, grade, cid}) {
  return (
    <>
        <div className=' w-[135px] h-[118px] rounded-b-lg flex gap-2 flex-col justify-between pb-2 items-center bg-[#F3F9FF]'>
            <h1 className=' text-[#074786] text-[32px]'>{rating}</h1>
            <h3 className=' text-[#074786] text-[14px]'>{grade}</h3>
            <div className=' flex'>
                <img src={StarI} alt='icon-s'/>
                <img src={StarI} alt='icon-s'/>
                <img src={StarI} alt='icon-s'/>
                <img src={StarI} alt='icon-s'/>
                <img className={` ${cid !== 4 ? "" : "hidden"}`} src={`${cid == 2 ? StarHI : StarI}`} alt='icon-s'/>
                <img className={` ${cid === 4 ? "" : "hidden"}`} src={StarEI} alt='icon-s'/>

            </div>
        </div>
    </>
  )
}

export default ReviewTag
