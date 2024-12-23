import React from 'react'
import Banner from './Banner'
import LatestFindLostItems from './LatestFindLostItems'
import Feautred from './Feautred'

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <LatestFindLostItems></LatestFindLostItems>
            <div className='p-10'>
            <Feautred></Feautred>
                </div>
        </div>
    )
}
