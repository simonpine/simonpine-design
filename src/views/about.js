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
              <p className="pTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
            </div>            
          </div>
          <div className="miViHI">
            <div className="cardsAbout">
              <div className="secuImageCon">
                <img className="secuImage" src={fir} />
              </div>
              <div className="textCardAbout">
                <h2 className="h2About">Mision</h2>
                <h3 className="h3About">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</h3>
              </div> 
            </div>
            <div className="cardsAbout">
              <div className="secuImageCon">
                <img className="secuImage" src={sec} />
              </div>
              <div className="textCardAbout">
                <h2 className="h2About">Vision</h2>
                <h3 className="h3About">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</h3>
              </div> 
            </div>
            <div className="cardsAbout">
              <div className="secuImageCon">
                <img className="secuImage" src={ter} />
              </div>
              <div className="textCardAbout">
                <h2 className="h2About">History</h2>
                <h3 className="h3About">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</h3>
              </div>           
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default About;
