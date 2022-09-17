import React from 'react'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import Header from '../../components/Header'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Veniam eius neque maiores delectus officia ipsa maxime facilis 
        nobis, cupiditate aliquid quo aperiam voluptas non tenetur libero 
        qui architecto distinctio similique!
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt='Story Image' />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Beatae voluptas esse mollitia magnam autem quaerat tempore 
              ut, excepturi velit, nulla quae sapiente soluta, harum 
              obcaecati expedita vel dignissimos exercitationem 
              repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ex ipsa, hic aliquid itaque iste, quam nulla dolorem, 
              voluptatum debitis explicabo facilis minus dolores totam! 
              Non, nesciunt! Quaerat cum nam voluptate!
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Beatae voluptas esse mollitia magnam autem quaerat tempore 
              ut, excepturi velit, nulla quae sapiente soluta, harum 
              obcaecati expedita vel dignissimos exercitationem 
              repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ex ipsa, hic aliquid itaque iste, quam nulla dolorem, 
              voluptatum debitis explicabo facilis minus dolores totam! 
              Non, nesciunt! Quaerat cum nam voluptate!
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt='Our Vision Image' />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt='Mission Image' />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Beatae voluptas esse mollitia magnam autem quaerat tempore 
              ut, excepturi velit, nulla quae sapiente soluta, harum 
              obcaecati expedita vel dignissimos exercitationem 
              repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ex ipsa, hic aliquid itaque iste, quam nulla dolorem, 
              voluptatum debitis explicabo facilis minus dolores totam! 
              Non, nesciunt! Quaerat cum nam voluptate!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About