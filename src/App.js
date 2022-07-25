import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";
import ImageSelect from "./ImageSelect";
import ImageComment from "./ImageComment";

function App(props) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, open, acceptedFiles, fileRejections } =
    useDropzone({
      noClick: true,
      noKeyboard: true,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      maxFiles: 1,
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) =>
    errors.map((e) => (
      <li key={file.path}>
        {e.message} {file.path}
      </li>
    ))
  );

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const clearFiles = () => {
    setFiles([]);
    acceptedFileItems();
    fileRejectionItems();
  };

  return (
    <div className="container">
      {files.length === 0 && (
        <ImageSelect
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          open={open}
          acceptedFileItems={acceptedFileItems}
          fileRejectionItems={fileRejectionItems}
        />
      )}

      {files.length > 0 && (
        <ImageComment files={files} clearFiles={clearFiles} />
      )}
    </div>
  );
}

export default App;
