//Core
import { useState } from "react"
import React from "react"

const ToggleButton = ({
    setIsToggleActive
}: {
    setIsToggleActive : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleClickToggle = () => {
        setIsActive(prev => !prev)
        setIsToggleActive(prev => !prev)
    }
    return (
        <div className={`w-[56px] h-[28px] cursor-pointer border rounded-[40px] bg-gray-200 flex items-center ${isActive ? 'justify-end bg-orange-500' : 'justify-start'}`}
            onClick={handleClickToggle}>
            <div className='w-[22px] h-[22px] bg-white border rounded-full mx-[3.2px]'></div>
        </div>
    )
}

export default ToggleButton