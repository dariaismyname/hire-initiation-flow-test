//Components
import SearchBar from "../components/SearchBar"
import ToggleButton from "../components/ToggleButton"
import AccordianItem from "../components/AccordianItem"
//Data
import { documents } from "../utils/data"
//Core
import { useState, useEffect } from "react"
//Interfaces
import { DocumentExamples } from "../interfaces"
//Icons
import {ReactComponent as ArrowLeft} from '../assets/icons/Iconarrow-left.svg'
import {ReactComponent as TickIcon} from '../assets/icons/icontick.svg'
import {ReactComponent as CrossIcon} from '../assets/icons/Iconcross.svg'

const MainPage = () => {
    const [selectedDocuments, setSelectedDocuments] = useState<DocumentExamples[]>([])
    const [isSelectedAllActive, setIsSelectedAllActive] = useState<boolean>(false)

    const handleRemoveFromList = (selectedDoc: DocumentExamples) => {
        const newDocumentsList = selectedDocuments.filter(doc => doc.id !== selectedDoc.id)
        setSelectedDocuments(newDocumentsList)
    }

    useEffect(() => {
        if (isSelectedAllActive) {
            const allDocuments = documents.flatMap(document => document.items)
            setSelectedDocuments(allDocuments)
        } else {
            setSelectedDocuments([])
        }
    }, [isSelectedAllActive])
    const returnSelectedDocs = (selectedDoc: DocumentExamples) => {
        return (
            <div
                key={selectedDoc.id}
                className="py-[13px] px-[6px] w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <TickIcon />
                    <p className="font-medium-14px">{selectedDoc.name}</p>
                </div>
                <div
                    onClick={() => handleRemoveFromList(selectedDoc)}
                    className="w-[24px] h-[24px] bordered-container-200 flex justify-center cursor-pointer items-center">
                    <CrossIcon />
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-50">
            <div className="w-[1024px] flex flex-col gap-6">
            <div className="bordered-container-200 p-6">
                <div className="flex gap-4 flex-col">
                    <p className="font-semibold-18px">Which agreements, forms and notices should be sent to Jason Smith?</p>
                    <p className=" font-medium-14px">
                        Employees assigned to this job type will be required to review, where relevant fill-in, and sign the following agreements and notices:
                    </p>
                </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className=" font-medium-14px">
                        Select the agreements, notices and documents you want Jason Smith to sign
                    </p>
                    <div className="flex gap-6 w-full">
                        <div className="w-1/2 bordered-container-300 p-4 flex flex-col gap-3">
                            <p className="font-medium-16px">Available Documents</p>
                            <div className="flex flex-col gap-3">
                                <SearchBar />
                                <div className='flex justify-between'>
                                    <p className="font-medium-14px">53 Available Documents</p>
                                    <div className="flex gap-2 items-center">
                                        <ToggleButton setIsToggleActive={setIsSelectedAllActive} />
                                        <p className="font-regular-16px">Select all</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-lg border-orange-500 scroll max-h-96" >
                                {documents.map(document => <AccordianItem selectedDocuments={selectedDocuments}
                                    setDocuments={setSelectedDocuments}
                                    document={document} />)}
                            </div>
                        </div>
                        <div className="w-1/2 bordered-container-300 p-4 flex flex-col gap-3">
                            <p className="font-medium-16px">Selected Documents</p>
                            <SearchBar />
                            <div className={`flexx flex-col border rounded-lg scroll
                             h-[425px] max-h-full ${selectedDocuments.length !== 0 ? 'bg-white p-2 border-green-500' : 'bordered-container-200 bg-gray-100 p-[40px] '}`}>
                                <div className="flex flex-col gap-6 w-full justify-center items-center">
                                    {selectedDocuments.length === 0 ? (
                                        <>
                                            <ArrowLeft />
                                            <p className="text-center font-semibold-12px">Select documents from the left panel to have employees review them and provide a signature acknowledging review</p>
                                        </>
                                    ) : (
                                            <div className="w-full">
                                                {selectedDocuments.map(selectedDoc => returnSelectedDocs(selectedDoc))}
                                            </div>
                                        )
}                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPage