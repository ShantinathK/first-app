import '../node_modules/bulma/css/bulma.css';
// import './App.css';
import Profilecard from './Profilecard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
  return (
    // inline styling

    // <div className="App" style={{margin:"2%",
    //                       padding:"2%",display:"flex",
    //                       flexDirection:"row", 
    //                       border:"1px solid black",
    //                       alignContent:"center",
    //                       justifyContent: "space-around"}}>
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
        <p className="title">Personal Digital Assitant</p>
        </div>
      </section>
      
      <div className="container">
        <section className='section'>
            <div className="columns">
              <div className="column is-3">
                {/* <img src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' width={500}/> */}
                <Profilecard title="Alex" 
                             handle="@alexa99" 
                             imageSrc={AlexaImage}
                             description="Alexa was created by Amazon"/>
              </div>
              <div className="column is-3">
                <Profilecard title="Cortana" 
                             handle="@Cortana999" 
                             imageSrc={CortanaImage}
                             description="Cortana was created by Microsoft"/>
              </div>
              <div className="column is-3">
                <Profilecard title="Siri" 
                             handle="@Siri9999" 
                             imageSrc={SiriImage}
                             description="Siri was created by Apple "/>
              </div>
            </div>
        </section>
      </div>
    </div>
    
  );
}

export default App;
