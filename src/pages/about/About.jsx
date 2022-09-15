import React from 'react'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import Header from '../../components/Header'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Veniam eius neque maiores delectus officia ipsa maxime facilis 
        nobis, cupiditate aliquid quo aperiam voluptas non tenetur libero 
        qui architecto distinctio similique!
      </Header>
    </>
  )
}

export default About