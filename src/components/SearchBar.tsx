//Icons
import { ReactComponent as SearchIcon } from '../assets/icons/Iconsearch.svg'

const SearchBar = () => {
    return (
        <div className="w-[468px] px-1 py-0.5 bordered-container-300 flex min-h-9 items-center ">
            <SearchIcon />
            <input className='ml-2.5 input-styled' placeholder='Search'/>
        </div>
    )
}

export default SearchBar