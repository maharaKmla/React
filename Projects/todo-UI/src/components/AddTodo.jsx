function AddTodo() {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter to do list here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-success kg-button fw-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
