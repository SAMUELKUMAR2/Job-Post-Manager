
import { useState } from 'react'

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='label flex items-center text-sm font-medium text-black'>
            Active?
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#4bf47e]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
       
      </label>
    </>
  )
}

export default Toggle