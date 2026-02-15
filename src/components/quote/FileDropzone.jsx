import React, { useState, useRef } from 'react';
import { Upload, File, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FileDropzone = ({ onFileSelect, selectedFile, onFileRemove }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            validateAndSetFile(files[0]);
        }
    };

    const handleFileInput = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            validateAndSetFile(files[0]);
        }
    };

    const validateAndSetFile = (file) => {
        const extension = file.name.split('.').pop().toLowerCase();
        const technicalExtensions = ['stl', 'obj', 'step', 'stp', 'iges', 'igs', 'f3d', 'skp'];

        if (technicalExtensions.includes(extension)) {
            onFileSelect(file);
        } else {
            // Si es otro formato, igual lo permitimos pero avisamos que es "referencia"
            if (confirm(`El formato .${extension} no es un estándar 3D directo (como STL). ¿Querés subirlo igual como referencia para que lo analicemos?`)) {
                onFileSelect(file);
            }
        }
    };

    const formatSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="w-full space-y-4">
            <h3 className="text-xl font-bold text-center text-secondary-dark w-full">
                Subida de archivo
            </h3>

            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !selectedFile && fileInputRef.current.click()}
                style={{ backgroundColor: isDragging || selectedFile ? 'var(--primary-light-opacity)' : 'var(--cotizar-card-bg)' }}
                className={`relative border-2 border-dashed border-gray-400 rounded-[2.1rem] p-8 transition-all flex flex-col items-center justify-center min-h-[250px] cursor-pointer shadow-md
          ${isDragging ? 'border-primary bg-primary/5 scale-[1.01]' : 'hover:border-primary'}
          ${selectedFile ? 'bg-gray-50/30' : ''}
        `}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    className="hidden"
                />

                <AnimatePresence mode="wait">
                    {!selectedFile ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center space-y-4"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Upload size={28} className="text-primary" />
                            </div>
                            <p className="text-base font-medium text-secondary-dark">Arrastrá tu archivo aquí</p>
                            <p className="text-gray-500 text-xs">
                                Soportamos STL, OBJ, STEP, IGES y más.<br />
                                O cualquier formato técnico de referencia (PDF, DWG, etc).
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="file"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="w-full"
                        >
                            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <File size={24} className="text-primary" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-bold text-secondary-dark truncate">{selectedFile.name}</p>
                                    <p className="text-xs text-gray-500">{formatSize(selectedFile.size)}</p>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onFileRemove();
                                    }}
                                    className="p-2 hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-colors rounded-lg"
                                    aria-label="Quitar archivo"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        fileInputRef.current.click();
                                    }}
                                    className="text-primary text-sm font-bold border-b border-primary/30 hover:border-primary transition-all pb-0.5"
                                >
                                    REEMPLAZAR ARCHIVO
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {!selectedFile && (
                <div
                    style={{ backgroundColor: 'var(--cotizar-card-bg)' }}
                    className="border border-gray-100 p-6 rounded-[2.1rem] space-y-4 shadow-md mt-4"
                >
                    <div className="flex items-start gap-3">
                        <AlertCircle size={18} className="text-primary shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <p className="text-sm font-bold text-secondary-dark">¿No tenés un archivo 3D?</p>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                No te preocupes. Si solo tenés una idea, un dibujo o una pieza física, nosotros nos encargamos del modelado.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            const check = document.getElementById('needs-modeling');
                            if (check) check.click();
                            document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{ backgroundColor: 'var(--cotizar-no-file-card-bg)' }}
                        className="w-full py-3 px-4 hover:bg-gray-100 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 transition-all uppercase tracking-wider"
                    >
                        SOLICITAR MODELADO / ASESORÍA
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileDropzone;
