import Layout from "../components/layout";
import fir from '../img/1.png'
import sec from '../img/2.png'
import ter from '../img/3.png'

function About() {
  return (
    <Layout a={'2'}>
        <div className="homeContainer">
          <div className="titleAbout">
          <div className="containerImageAbout">
              <img className="mainImageAbout" src="/img/about1.jpeg" />
              <img className="mainImageAbout2" src="/img/about2.jpeg" />
            </div>
            <div className="first">
              <h1 className="mainAbout">Custom Furniture Built Only For You</h1>
              <p className="pTitle pTitle2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
            </div>            
          </div>
          <div className="miViHI">
            <div className="cardsAbout">
              <div className="secuImageCon">
                <img className="secuImage" src={fir} />
              </div>
              <div className="textCardAbout">
                <h2 className="h2About">Mision</h2>
                <h3 className="h3About">Provide high-quality, stylish and sustainable furniture with exceptional customer service, to enhance our customers' living spaces and lifestyle.</h3>
              </div> 
            </div>
            <div className="cardsAbout">
              <div className="secuImageCon">
                <img className="secuImage" src={ter} />
              </div>
              <div className="textCardAbout">
                <h2 className="h2About">History</h2>
                <h3 className="h3About">SimonPine-Design was founded in 2022, providing high-quality and affordable furniture. Also is known for its sustainable, innovative designs and exceptional customer service.</h3>
              </div>           
            </div>
            <div className="cardsAbout">
              <div className="secuImageCon">
                <img className="secuImage" src={sec} />
              </div>
              <div className="textCardAbout">
                <h2 className="h2About">Vision</h2>
                <h3 className="h3About">Be a sustainable and innovative furniture brand that inspires and empowers customers to create beautiful living spaces while contributing to a better future.</h3>
              </div> 
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default About;
