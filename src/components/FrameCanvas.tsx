import { useRef, useEffect, memo } from 'react';

interface FrameCanvasProps {
  image: HTMLImageElement | null;
  className?: string;
}

const FrameCanvas = memo(({ image, className = '' }: FrameCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      // Draw the image
      drawImage();
    };

    const drawImage = () => {
      if (!ctx || !image) return;

      const rect = canvas.getBoundingClientRect();
      
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Calculate aspect ratios
      const imgAspect = image.width / image.height;
      const canvasAspect = rect.width / rect.height;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      // Cover the canvas while maintaining aspect ratio
      if (imgAspect > canvasAspect) {
        // Image is wider - fit height
        drawHeight = rect.height;
        drawWidth = drawHeight * imgAspect;
        offsetX = (rect.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image is taller - fit width
        drawWidth = rect.width;
        drawHeight = drawWidth / imgAspect;
        offsetX = 0;
        offsetY = (rect.height - drawHeight) / 2;
      }

      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [image]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ 
        display: 'block',
        filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.8))'
      }}
    />
  );
});

FrameCanvas.displayName = 'FrameCanvas';

export default FrameCanvas;
