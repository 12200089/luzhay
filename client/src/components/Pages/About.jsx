import React from 'react';
import './css/AboutUs.css';
import Container from '../fragment/Container';
import b1 from '../assets/img/b8.jpg';

const About = () => {
  return (
    <Container>
      <div className="About">
        <div className="about-us-content">
          <h2 className="about-us-title" style={{ marginTop: '20px' }}>LUZHAY</h2>  
          <p className="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet euismod lacus non lacinia.
            Duis ullamcorper malesuada quam, vitae iaculis neque efficitur eget.
            Fusce varius, libero in ultricies mollis, nisi felis dignissim arcu, id aliquet nisl metus nec mi.
          </p>
          <p className="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet euismod lacus non lacinia.
            Duis ullamcorper malesuada quam, vitae iaculis neque efficitur eget.
            Fusce varius, libero in ultricies mollis, nisi felis dignissim arcu, id aliquet nisl metus nec mi.
          </p>
          <img src={b1} alt="img" className="about-us-image" style={{width:300,height:300}} />
        </div>
      </div>
    </Container>
  );
};

export default About;