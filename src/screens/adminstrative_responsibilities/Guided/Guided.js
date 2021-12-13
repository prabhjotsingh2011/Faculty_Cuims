import React from 'react'
import SubNavigation from '../../../components/Admin-responsibility/SubNavigation/SubNavigation'
import { HeadTitle } from '../../feedback/Feedback'
import { nav_items_admin } from '../AdminResposibilty'

const Guided = () => {
    const items=['PROJECT' , 'PHD/ M.TECH.']
    return (
        <div>
            <HeadTitle nav_items={nav_items_admin} />
            <div className='w-3/4 justify-start mx-10'>
                <SubNavigation items={items}/>
            </div>
        </div>
    )
}

export default Guided
