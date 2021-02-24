/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';

const ClearButton = styled(Button)`margin-bottom: 2rem;`;

const Textarea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const PreviewTag = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100%;
  height: 100%;
  padding: 4px;
  box-sizing: border-box;
`;

const PreviewInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const MyDropzone = ({ input, placeholder }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );
      input.onChange(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );
    },
  });

  const removeAll = () => {
    setFiles([]);
  };

  return (
    <section className="container">
      <Textarea {...getRootProps()}>
        <input {...getInputProps()} />
        <p>{placeholder}</p>
      </Textarea>
      <PreviewContainer>
        {files.map((file) => (
          <PreviewTag key={file.name}>
            <PreviewInner>
              <Img src={file.preview} />
            </PreviewInner>
          </PreviewTag>
        ))}
      </PreviewContainer>
      {files.length > 0 && <ClearButton onClick={removeAll}>Remove Image</ClearButton>}
    </section>
  );
};

MyDropzone.propTypes = {
  input: PropTypes.any,
  placeholder: PropTypes.string,
};

export default MyDropzone;
