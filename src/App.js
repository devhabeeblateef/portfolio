import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Background from './Components/Background';
import backgroundVideo from './video/video2.mp4';
import avatar from './Image/habeeb.jfif';

function App() {
  return (
    <div>
      <video autoPlay loop muted id="video" class="grayscale">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;
