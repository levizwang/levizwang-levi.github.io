import { useEffect } from 'react';
import { X, MapPin, Download, Camera } from 'lucide-react';
import { Photo } from '@/types/optics';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
}

export function Lightbox({ photo, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors z-10 text-gray-900 dark:text-white"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="max-w-7xl w-full grid md:grid-cols-[1fr,400px] gap-8 max-h-[90vh]">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={photo.url}
            alt={photo.title}
            className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
          />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-4">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{photo.title}</h2>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{photo.location}</span>
            </div>
          </div>

          {/* Tech Specs */}
          <div className="bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1A1A1A] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-4 h-4 text-[#CCFF00]" />
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Technical Specifications</h3>
            </div>
            <div className="font-mono text-xs space-y-2 text-gray-700 dark:text-gray-300">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400 dark:text-gray-500">Camera:</span>
                <span>{photo.camera}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400 dark:text-gray-500">Lens:</span>
                <span>{photo.lens}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400 dark:text-gray-500">ISO:</span>
                <span>{photo.iso}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400 dark:text-gray-500">Aperture:</span>
                <span>{photo.aperture}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400 dark:text-gray-500">Shutter:</span>
                <span>{photo.shutter}</span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">The Story</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {photo.story}
            </p>
          </div>

          {/* Download button */}
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#CCFF00] text-black rounded-lg font-medium hover:bg-[#B8E600] transition-colors">
            <Download className="w-4 h-4" />
            Download Wallpaper
          </button>
        </div>
      </div>
    </div>
  );
}