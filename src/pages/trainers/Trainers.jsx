import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icon/bs'
import {AiOutlineTwitter} from 'react-icon/ai'
import {FaFacebookF, FaLinkedIn} from 'react-icon/fa'
import './trainers.css'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero dolorum quae maxime quaerat culpa porro amet dignissimos minima ducimus, doloribus enim vitae molestias dolores ad repellat impedit magnam! Praesentium.
    </Header>
    <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={ 
            [
              {icon: <BsInstagram/>, link: socials[0]},
              {icon: <AiOutlineTwitter/>, link: socials[1]},
              {icon: <FaFacebookF/>, link: socials[2]},
              {icon: <FaLinkedIn/>, link: socials[3]}
            ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers