import React,{useEffect,useState} from 'react'
import SubItems from '../SubItems';
import './_Sub-SubItems.scss'

const Sub_Sub_items = (prop) => {
    const item_is_object = typeof (prop.subItems) === 'object' ? true : false

    const sublist_is_present_or_not = prop.subItems.subItems ? true : false;

    useEffect(() => {
        
    }, [prop.toggleHideSubItems]);
    
    var text_of_SubItem_object = '';
    if (item_is_object) {
        const subItems_of_SubItem_object = prop.subItems?.subItems
        text_of_SubItem_object = prop.subItems?.text;
    }
    return (
        <div>
            <ul className={`ml-8 ${prop.toggleHideSubItems?'show_subItems':'sub_items'}`}>
                <li>
                    <div className="item  border-b-2 border-black my-1 px-4 mx-4 py-1 cursor-pointer w-full justify-between bg-yellow-400"  >
                        <div >
                            {
                                item_is_object ? prop.subItems.text : prop.subItems
                            }
                        </div>

                    </div>
                    {
                            sublist_is_present_or_not
                                ?
                                prop.subItems?.subItems.map((current_sublist) => (
                                    <SubItems subItems={current_sublist} />

                                ))
                                : ''
                    }
                </li>
            </ul>
        </div>
    )
}

export default Sub_Sub_items
