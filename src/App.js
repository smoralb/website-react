import bck from './bckbrooklinbridge.jpg'
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <map name='me-clickable'>
          <area shape='rect' coords='0,0,60,100' href='www.google.es'/>
        <img src={bck} className="Img-bck" useMap='#me-clickable'/>
        </map>
      </div>
    </body>
  );
}

export default App;
