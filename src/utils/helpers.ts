// src/hooks/useDragAndDrop.js

import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

const useDragAndDrop = (onDrop) => {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: 'image/*', // Acepta solo imágenes
    onDrop,
  });

  return {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragReject,
  };
};

export default useDragAndDrop;
