//Interfaces
import { DocumentItem, DocumentExamples } from "../interfaces"
//Icons
import { ReactComponent as ArrowDown } from '../assets/icons/chevron-downarrow-down.svg'
import { ReactComponent as ArrowUp } from '../assets/icons/chevron-uparrow-up.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/iconarrow-right.svg'
//Core
import { useState } from "react"
import React from "react"

const AccordianItem = ({
    document,
    setDocuments,
    selectedDocuments,
}: {
        document: DocumentItem,
        setDocuments: React.Dispatch<React.SetStateAction<DocumentExamples[]>>,
        selectedDocuments: DocumentExamples[]
}) => {
    const [selectedSection, setSelectedSection] = useState<number>(0)
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleSelectTab = (tabId: number) => {
        setIsActive(prev => !prev)
        setSelectedSection(tabId)
    }

    const selectItems = (item: DocumentExamples) => {
        const isItemSelected = selectedDocuments.find(selectedItem => selectedItem.id === item.id);
        if (isItemSelected) {
            return
        } else {
            // setSelectedItems(prev => [...prev, item])
            setDocuments((prev: DocumentExamples[]) => [...prev, item])
        }
    }

    const returnItems = (item: DocumentExamples) => {
        return (
            <div key={item.id} className="p-5 flex justify-between items-center">
                <p className="font-medium-16px">{item.name}</p>
                <div
                    onClick={() => selectItems(item)}
                    className="w-[24px] h-[24px] cursor-pointer bordered-container-200 flex justify-center items-center">
                    <ArrowRight/>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div
                className='py-5 pl-5 pr-[30px] border-b border-gray-200 
                font-medium-16px text-gray-600 flex justify-between items-center'
                key={document.id}
                onClick={() => handleSelectTab(document.id)}
            >
                {document.title}
                {selectedSection === document.id && isActive ? (
                    <>
                        <ArrowUp className="cursor-pointer" />
                    </>
                    ) : (
                        <ArrowDown className="cursor-pointer" />
                    )
                }
            </div>
            {selectedSection === document.id && isActive && (
            <div className="flex flex-col">
                {document.items.map(item => returnItems(item))}
            </div>   
            )}
        </div>
       
    )
}

export default AccordianItem