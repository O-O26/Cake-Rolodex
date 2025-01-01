import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './Components/Search-Box/SearchBox.component'
import CardList from './Components/Card-List/CardList.component'

const App = () => {
  // Using Vite, React, Json-server, UseState, useEffect
  const [searchField, setSearchField] = useState("")
  const [cakes, setCakes] = useState([])
  const [filteredCakes, setFilteredCakes] = useState(cakes)
  
  useEffect(() => {
    fetch("http://localhost:4100/cakes")
      .then((res) => res.json())
      .then((allTheCakes) => setCakes(allTheCakes))
  }, [])

  useEffect(() => {
    const newFilteredCakes = cakes.filter((cake) => {
      return cake.title.toLocaleLowerCase().includes(searchField)
    })
    setFilteredCakes(newFilteredCakes)
  }, [cakes, searchField])

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase()
    setSearchField(searchString)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Cake Shop</h1>
      <SearchBox
      className= "cake-search-box"
      placeholder={"search cakes"}
      onChangeHandler={onSearchChange}
      />
      <CardList cakes={filteredCakes}/>
    </div>
  )

}

export default App
