import React,{useEffect,useState} from 'react'
import './_SubItems.scss'
import { IoIosArrowForward } from 'react-icons/io'
import Sub_Sub_items from './Sub-Sub-Items/Sub_Sub_items'
import { useHistory } from 'react-router'

const SubItems = (prop) => {

    const item_is_object = typeof (prop.subItems) === 'object' ? true : false
    const sublist_is_present_or_not = prop.subItems.subItems ? true : false;

    const [toggleHideSubItems, setToggleHideSubItems] = useState(false);

    const history=useHistory()


    useEffect(() => {
        
    }, [prop.toggleHide,toggleHideSubItems]);

    const handleClickOnItem=()=>{
        setToggleHideSubItems(!toggleHideSubItems);
        if(!item_is_object) {
            var newString_without_spaces = prop.subItems.replace(" ", "_");
            history.push(`/${newString_without_spaces}`)
        }
    }
    
    var text_of_SubItem_object = '';
    if (item_is_object) {
        const subItems_of_SubItem_object = prop.subItems?.subItems
        text_of_SubItem_object = prop.subItems?.text;
    }
    return (
        <>
            <ul className={`ml-4 ${prop.toggleHide?'show_subItems':'sub_items'}`}  >
                <li onClick={handleClickOnItem}>
                    <div className="item flex border-b-2 border-black my-1 px-3 py-1 cursor-pointer w-full justify-between bg-red-200"  >

                        <div >
                            {
                                item_is_object ? prop.subItems.text :
                                    prop.subItems
                            }
                        </div>
                        <div>
                            {
                                item_is_object? (
                                        <IoIosArrowForward className='mt-1' />
                                    ) :''
                            }
                        </div>
                    </div>
                   

                </li>
            </ul>
            {
                sublist_is_present_or_not
                    ?
                    prop.subItems?.subItems.map((current_sublist) => (
                        <Sub_Sub_items subItems={current_sublist} toggleHideSubItems={toggleHideSubItems} />
                    ))
                    : ''
            }


        </>
    )
}

export default SubItems
