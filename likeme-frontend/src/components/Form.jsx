function Form({ setTitle, setImgSRC, setDescription, addPost }) {
  return (
    <div className="form">
      <div className="mb-2">
        <h6>Add post</h6>
        <label>Title</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>Image URL</label>
        <input
          onChange={(event) => setImgSRC(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Description</label> <br />
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={addPost} className="btn btn-light m-auto">
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
