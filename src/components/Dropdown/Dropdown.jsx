
import BasicDropdown from './BasicDropdown';
import DropdownIcon from './DropdownIcon';
import HtmlContent from './HtmlContent';
import PrimaryDropdown from './PrimaryDropdown';
import ScrolledDropdown from './ScrolledDropdown';

const Dropdown = () => {
 
  return (
   <div className='flex flex-col gap-5 m-10'>
    <BasicDropdown/>
    <PrimaryDropdown/>
    <DropdownIcon/>
    <ScrolledDropdown/>
    <HtmlContent/>
   </div>
    
  )
}

export default Dropdown