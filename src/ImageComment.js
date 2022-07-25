function ImageComment({ files, clearFiles }) {
  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumb-inner">
        <img
          src={file.preview}
          alt={"preview"}
          className="image-preview"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  return (
    <section className="comment-section">
      <div className="thumbs-container"> {thumbs} </div>
      <div className="comment">
        <div className="form-container">
          <textarea placeholder="comment here" rows={10}></textarea>
          <div className="btn-group">
            <button>comment</button>
            <button onClick={clearFiles}>cancel</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageComment;
