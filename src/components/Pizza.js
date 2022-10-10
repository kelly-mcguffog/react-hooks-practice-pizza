import React from "react";

function Pizza({pizza, handleEditPizzaClick}) {
  const {id, topping, size, vegetarian} = pizza

  function sendIdToApp(){
    handleEditPizzaClick(id)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={sendIdToApp} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
