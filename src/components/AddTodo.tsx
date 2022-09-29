import React from "react";
import { runInAction } from "mobx";
import { inject, observer } from "mobx-react";

const todosDataUrl =
  "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json";

const AddTodo = inject("todoStore")(
  observer((props) => {
    const { todoStore: store } = props;
    return (
      <>
        <div className="add-todo-container">
          <input
            type="text"
            placeholder="New Todo"
            className="add-todo-input"
            value={store.newTodo}
            onChange={(e) =>
              runInAction(() => (store.newTodo = e.target.value))
            }
          />
          <button type="button" onClick={store.addTodo} className="add-btn">
            Add
          </button>
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="load-btn"
            onClick={() => store.load(todosDataUrl)}
          >
            Load sample todos
          </button>

          <button type="button" className="del-btn" onClick={store.clearTodos}>
            clear todos
          </button>
        </div>
      </>
    );
  })
);

export default AddTodo;