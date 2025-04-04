import './App.css'
import Card from './components/Card/Card'
import items from '/src/data.js'

function App() {
  console.log(items);

  return (
    <>
      <div className="item-container">
        {
          items.map((item) => (
            <Card key={item.id} item={item} />
          ))
        }
      </div>
    </>
  )
}

export default App
