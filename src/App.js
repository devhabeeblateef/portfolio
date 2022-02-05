import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Background from './Components/Background';
import backgroundVideo from './video/video2.mp4';
import avatar from './Image/mock.png';

function BG() {
  return (
    <div>
      <video autoPlay loop muted id="video" class="grayscale">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
)}

function Avatar() {
  return (
    <div>
      <div class="overlay">
      <div id="outerContainer">
      <div id="container">
      <div class="item">
        <img src={avatar} />
      </div>
      <div class="circle" id="One"></div>
      <div class="circle" id="Two"></div>
      <div class="circle" id="Three"></div>
      <div class="circle" id="Four"></div>
      </div>
      </div>
      </div>
    </div>
  );
}

function Bio()
{
  return (
    <div>
      <div class="overlay">
      <div class="message">
      <h2 class="head">Hello.</h2>
      <h1 class="des">-</h1> 
      
      <h3 class="subHead">Lateef Habeeb</h3>
      <p class="theBody">Front End Web Developer</p>
      </div>
      </div>
    </div>
  )
}

function Pages()
{
  return (
    <div>
    
    </div>
  )
}
function App()
{
  return (
    <div>
      <BG />
      <Avatar />
      <Bio />
      <Pages />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;
