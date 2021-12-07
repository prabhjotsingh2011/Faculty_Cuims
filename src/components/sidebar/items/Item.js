import React, { useEffect, useState } from 'react'
import './_Item.scss'
import { IoIosArrowForward } from 'react-icons/io'
import SubItems from '../subItems/SubItems';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'


const Item = ({ curr_item }) => {
    const sublist_is_present_or_not = curr_item.subItems ? true : false;
    const routeLink = curr_item.route ? true : false
    const sub_sublist_is_present_or_not = typeof (curr_item.subItems) === 'object' ? true : false


    const [toggleHide, setToggleHide] = useState(false);
    const history = useHistory();

    const handleClickOnItem = () => {
        setToggleHide(!toggleHide);
        // if(!sublist_is_present_or_not) history.push('/mentoring')
        // if(!sublist_is_present_or_not) history.push(`${curr_item.route?curr_item.route:''}`)
        // history.push('/mentoring')
    }
    useEffect(() => {

    }, [toggleHide])


    return (
        <>
            <ul>
                <li onClick={handleClickOnItem}>

                    {
                        routeLink
                            ?<Link to={`${curr_item.route}`}>
                             <div className="item flex border-b-2 border-black my-1 px-3 py-1 cursor-pointer w-full justify-between"  >

                                <div >{curr_item?.text}</div>
                                <div >
                                    {
                                        curr_item?.subItems
                                            ? (
                                                <IoIosArrowForward className='mt-1' />
                                            ) : ''
                                    }
                                </div>
                            </div>
                            </Link>
                            : <div className="item flex border-b-2 border-black my-1 px-3 py-1 cursor-pointer w-full justify-between"  >

                                <div >{curr_item?.text}</div>
                                <div >
                                    {
                                        curr_item?.subItems
                                            ? (
                                                <IoIosArrowForward className='mt-1' />
                                            ) : ''
                                    }
                                </div>
                            </div>

                    }



                </li>
            </ul>

            {
                sublist_is_present_or_not
                    ?
                    curr_item?.subItems.map((current_sublist) => (
                        <SubItems subItems={current_sublist} toggleHide={toggleHide} />

                    ))
                    : ''
            }
        </>
    )
}
{/* <IoIosArrowForward className='mt-1' /> */ }
export default Item
