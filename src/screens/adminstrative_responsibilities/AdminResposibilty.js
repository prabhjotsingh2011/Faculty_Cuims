import React from 'react'
import Card from '../../components/Admin-responsibility/GeneralCard/Card'
import SubNavigation from '../../components/Admin-responsibility/SubNavigation/SubNavigation'
import { HeadTitle } from '../feedback/Feedback'
import './AminResponsibilty.scss'

export const nav_items_admin = [{ text: 'Mentoring', route: '/mentoring' },
{ text: 'MOOC', route: '/mooc' },
{ text: 'Guided', route: '/guided' },
]
const AdminResposibilty = () => {
    return (
        <div className='h-screen' >
            <HeadTitle nav_items={nav_items_admin} />
            
        </div>
    )
}

export default AdminResposibilty
