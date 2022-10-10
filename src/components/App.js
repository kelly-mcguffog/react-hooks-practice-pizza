import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(data => setPizzas(data))
  },[])


  function handleEditPizzaClick(id){
    const selectedPizza = pizzas.find(pizza => pizza.id === id)
    setEditPizza(selectedPizza)
  }

  const updatePizzaList = (newPizza) => {
    const newList = pizzas.map(pizza => {
      if(pizza.id === newPizza.id){
        return newPizza
      }else {
        return pizza
      }
    })
    setPizzas(newList)
  }

  return (
    <>
      <Header />
      <PizzaForm {...editPizza} setEditPizza={setEditPizza} updatePizzaList={updatePizzaList} />
      <PizzaList pizzas={pizzas} handleEditPizzaClick={handleEditPizzaClick}/>
    </>
  );
}

export default App;
