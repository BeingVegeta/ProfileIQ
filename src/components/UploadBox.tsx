import React, { useCallback, useState } from 'react';
import { Upload, FileUp, CheckCircle2, AlertCircle } from 'lucide-react';

interface UploadBoxProps {
  onFileSelect: (file: File) => void;
}

export function UploadBox({ onFileSelect }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (selectedFile: File) => {
    setError(null);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.status === 'success') {
        setFile(selectedFile);
        onFileSelect(selectedFile);
      } else {
        throw new Error(data.message || 'Upload failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      setFile(null);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const validateFile = (selectedFile: File) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Please upload a PDF or Word document');
      return false;
    }
    return true;
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setError(null);

    const files = Array.from(e.dataTransfer.files);
    if (files?.[0] && validateFile(files[0])) {
      uploadFile(files[0]);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setError(null);
    
    if (files?.[0] && validateFile(files[0])) {
      uploadFile(files[0]);
    }
  }, [onFileSelect]);

  return (
    <div
      className={`relative p-8 border-2 border-dashed rounded-xl transition-all duration-300 ${
        isDragging 
          ? 'border-purple-400 bg-purple-400/10' 
          : file 
            ? 'border-green-400 bg-green-400/10'
            : error
              ? 'border-red-400 bg-red-400/10'
              : 'border-white/20 hover:border-purple-400/50 hover:bg-purple-400/5'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileInput}
        accept=".pdf,.doc,.docx"
      />
      
      <div className="flex flex-col items-center text-center space-y-4">
        {error ? (
          <>
            <AlertCircle className="w-12 h-12 text-red-400" />
            <div>
              <p className="text-lg font-medium text-red-400">{error}</p>
              <p className="text-sm text-gray-400 mt-1">Please try again</p>
            </div>
          </>
        ) : file ? (
          <>
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            <div>
              <p className="text-lg font-medium text-green-400">Perfect! Let's explore your path</p>
              <p className="text-sm text-gray-400 mt-1">{file.name}</p>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <Upload className="w-12 h-12 text-purple-400" />
              <FileUp className="w-6 h-6 text-purple-400 absolute -right-2 -top-2 animate-bounce" />
            </div>
            <div>
              <p className="text-lg font-medium">Drop your resume to kick-start your dream journey 🚀</p>
              <p className="text-sm text-gray-400 mt-1">Drop your file here or click to browse</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}