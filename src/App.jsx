import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import data from './components/data';

function App() {
  const cards = data.map(x => {
    return(
      <Card
        key = {x.id}
        img = {x.img}
        title = {x.title}
      />
    )
  })

  return(
    <div className='App'>
          <Navbar/>
          <Hero/>
          <div className='container'>
            {cards}
          </div>
    </div>

  )
}

export default App;
