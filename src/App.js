import './App.css';
import SectionHeader from './components/section-header/sectionHeader';
import SectionItem from './components/section-item/sectionItem';

// works as a lamba function (inside parenthesis you can pass props)
const App = () =>
    <body>
      <div className="App"/>
      <SectionHeader/>
      <SectionItem title = "Test Title" college = "Test college"
      date = "Test date" description = "Capacidad de utilizar un enfoque sistemático, disciplinado y cuantificable para el desarrollo, operación y mantenimiento del software, de establecer y utilizar principios sólidos de ingeniería para obtener software fiable que funcione
      eficientemente en máquinas reales así como de estimar los costes de los desarrollos.<br/><br/>Todo ello supone un conocimiento profundo de la programación de ordenadores, la implantación y planificación de sistemas informáticos
      así como de las fases del ciclo de vida del software, desde una perspectiva práctica y adaptada a las realidades sociales de nuestro país." />
    </body>

export default App;
