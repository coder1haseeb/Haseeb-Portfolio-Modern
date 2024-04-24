import React,{useEffect} from 'react'
import './About.css'

const About = ({refObj}) => {

  useEffect(() => {
    if (refObj.current) {
      refObj.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [refObj])

  return (
    <div ref={refObj} className='child_component_main_page_div'>
      <div className="top_div_for_the_heading_of_current_component">
        About Me is twice
      </div>
    </div>
  )
}

export default About