function ImageSelect({
  getRootProps,
  getInputProps,
  open,
  acceptedFileItems,
  fileRejectionItems,
}) {
  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p> Drag and drop an image here </p>
        <p>
          <em> - OR - </em>
        </p>
        <button type="button" onClick={open}>
          Select an image from your computer
        </button>
      </div>
      <aside>
        {/* {acceptedFileItems.length > 0 && (
          <div>
            <h4> Accepted files </h4> <ul> {acceptedFileItems} </ul>
          </div>
        )} */}

        {fileRejectionItems.length > 0 && (
          <div className="errors">
            <h4> Rejected files </h4> <ul> {fileRejectionItems} </ul>
          </div>
        )}
      </aside>
    </>
  );
}

export default ImageSelect;
