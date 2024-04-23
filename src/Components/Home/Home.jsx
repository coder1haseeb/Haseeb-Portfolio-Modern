import React from 'react'
import './Home.css'
import SideInfoBar from '../Side Info Bar/SideInfoBar'
import TopNavBar from '../Top Nav Bar/TopNavBar'

const Home = () => {
  return (
    <div className='home_back_ground_main_div'>
      <div className="left_side_for_home_side_bar_display">
        <SideInfoBar />
      </div>
      <div className="side_side_for_home_nav_bar_and_component_display">
        <TopNavBar />
      </div>
    </div>
  )
}

export default Home