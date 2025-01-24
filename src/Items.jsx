/* eslint-disable react/prop-types */
import checkImg from "../src/assets/check.svg";
import dashImg from "../src/assets/dash.svg";

export default function Items({ itemData, checked, changeState, deleteTodo }) {
  return (
    <div className="w-50 mx-auto">
      <li
        className={
          checked
            ? "list-group-item my-2 bg-danger-subtle"
            : "list-group-item my-2 bg-success-subtle"
        }
      >
        <button
          onClick={() => deleteTodo(itemData.id)}
          className="btn-close float-start"
        ></button>
        {itemData.content}
        {checked ? (
          <img
            onClick={changeState}
            id="check"
            className="float-end"
            src={checkImg}
          />
        ) : (
          <img
            onClick={changeState}
            id="uncheck"
            className="float-end"
            src={dashImg}
          />
        )}
      </li>
    </div>
  );
}
