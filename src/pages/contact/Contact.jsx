import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'


const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nisi enim fuga sunt animi numquam, perferendis sint ipsum itaque nam 
      quod quia repellendus, tenetur corrupti illum ab, cum consectetur. 
      Repellendus, impedit.
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:syedf.hussain7@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
          <a href="http://m.me/forhad.hussain.3979" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
          <a href="https://wa.me/+13478916304" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact