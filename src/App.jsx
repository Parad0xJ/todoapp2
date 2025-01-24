/* eslint-disable no-undef */
import { useState } from "react";
import NavBar from "./NavBar";
import "./App.css";
import { nanoid } from "nanoid";
import Items from "./Items";
import Footer from "./Footer";
import bootstrapLogo from "../src/assets/bootstrap-logo.svg";
import reactLogo from "../src/assets/react.svg";

function App() {
  const [fullTodoList, setFullTodoList] = useState([
    { id: nanoid(4), content: "Go To Shop", check: false },
    { id: nanoid(4), content: "Diner at 9", check: true },
    { id: nanoid(4), content: "Swimming Pool", check: false },
    { id: nanoid(4), content: "Play XBOX", check: true },
  ]);
  //Filtre
  const [todoList, setTodoList] = useState(fullTodoList);
  const [todo, setTodo] = useState("");

  function handleClickAll() {
    setTodoList(fullTodoList);
  }
  function handleAfaire() {
    setTodoList(fullTodoList.filter((elt) => elt.check === false));
  }
  function handleFait() {
    setTodoList(fullTodoList.filter((elt) => elt.check === true));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    const newTask = { id: nanoid(4), content: todo, check: false };

    setFullTodoList([...fullTodoList, newTask]);
    setTodoList([...todoList, newTask]);
    setTodo("");
  }
  function deleteTodo(id) {
    const upDateLists = fullTodoList.filter((elt) => elt.id !== id);
    setFullTodoList(upDateLists);
    setTodoList(upDateLists);
  }
  return (
    <>
      <NavBar url1={bootstrapLogo} url2={reactLogo} />
      <div
        className="btn-group my-4"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          onClick={handleClickAll}
          type="button"
          className="btn btn-outline-primary"
        >
          All ToDO
        </button>
        <button
          onClick={handleAfaire}
          type="button"
          className="btn btn-outline-success"
        >
          ToDo à Faire
        </button>
        <button
          onClick={handleFait}
          type="button"
          className="btn btn-outline-danger"
        >
          To Do Fait
        </button>
      </div>
      <ul className="list-group">
        {todoList.map((elt) => (
          <Items
            key={elt.id}
            itemData={elt}
            checked={elt.check}
            deleteTodo={deleteTodo}
            changeState={() => {
              // Mettre à jour fullTodoList
              setFullTodoList((prevList) =>
                prevList.map((item) =>
                  item.id === elt.id ? { ...item, check: !item.check } : item
                )
              );

              // Mettre à jour todoList en fonction de fullTodoList et du filtre actuel
              setTodoList((prevList) =>
                prevList.map((item) =>
                  item.id === elt.id ? { ...item, check: !item.check } : item
                )
              );
            }}
          />
        ))}
      </ul>
      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="form-control mt-4 w-75 mx-auto">
        <div className="input-group">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Ajoutez une tache..."
          />
          <button className="btn btn-outline-success">Ajout</button>
        </div>
      </form>
      <Footer
        feature="Petite application ToDO qui permet de 'C R U D' les élèments."
        makeWith="Codé avec : React & Bootstrap 5"
      />
    </>
  );
}

export default App;
