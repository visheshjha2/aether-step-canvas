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

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      drawImage();
    };

    const drawImage = () => {
      if (!ctx || !image) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const imgAspect = image.width / image.height;
      const canvasAspect = rect.width / rect.height;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      // Contain: fit the entire image centered within the canvas
      if (imgAspect > canvasAspect) {
        drawWidth = rect.width;
        drawHeight = drawWidth / imgAspect;
      } else {
        drawHeight = rect.height;
        drawWidth = drawHeight * imgAspect;
      }

      offsetX = (rect.width - drawWidth) / 2;
      offsetY = (rect.height - drawHeight) / 2;

      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    updateCanvasSize();

    // Handle resize and orientation change for mobile
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateCanvasSize, 100);
    });

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('orientationchange', () => {
        setTimeout(updateCanvasSize, 100);
      });
    };
  }, [image]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{
        display: 'block',
        touchAction: 'pan-y',
      }}
    />
  );
});

FrameCanvas.displayName = 'FrameCanvas';

export default FrameCanvas;
