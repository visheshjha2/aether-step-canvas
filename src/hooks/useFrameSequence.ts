import { useState, useEffect, useCallback, useRef } from 'react';
import JSZip from 'jszip';

interface UseFrameSequenceOptions {
  zipUrl: string;
  totalFrames: number;
  onProgress?: (progress: number) => void;
}

interface UseFrameSequenceReturn {
  images: HTMLImageElement[];
  isLoading: boolean;
  loadProgress: number;
  error: string | null;
  getFrame: (progress: number) => HTMLImageElement | null;
}

export const useFrameSequence = ({
  zipUrl,
  totalFrames,
  onProgress,
}: UseFrameSequenceOptions): UseFrameSequenceReturn => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadFrames = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setLoadProgress(0);

        // Fetch the ZIP file
        const response = await fetch(zipUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch ZIP: ${response.statusText}`);
        }

        const zipData = await response.arrayBuffer();
        const zip = await JSZip.loadAsync(zipData);

        // Get all JPG files from the ZIP and sort them
        const jpgFiles = Object.keys(zip.files)
          .filter(name => name.toLowerCase().endsWith('.jpg') && !name.startsWith('__MACOSX'))
          .sort((a, b) => {
            // Extract frame number from filename
            const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
            const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
            return numA - numB;
          });

        if (jpgFiles.length === 0) {
          throw new Error('No JPG files found in ZIP');
        }

        console.log(`Found ${jpgFiles.length} frames in ZIP`);

        const loadedImages: HTMLImageElement[] = new Array(jpgFiles.length);
        let loadedCount = 0;

        // Load images in parallel with batching for performance
        const batchSize = 20;
        for (let i = 0; i < jpgFiles.length; i += batchSize) {
          const batch = jpgFiles.slice(i, i + batchSize);
          
          await Promise.all(
            batch.map(async (filename, batchIndex) => {
              const index = i + batchIndex;
              const file = zip.files[filename];
              const blob = await file.async('blob');
              const url = URL.createObjectURL(blob);

              return new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                  loadedImages[index] = img;
                  loadedCount++;
                  const progress = Math.round((loadedCount / jpgFiles.length) * 100);
                  if (isMounted) {
                    setLoadProgress(progress);
                    onProgress?.(progress);
                  }
                  resolve();
                };
                img.onerror = () => {
                  console.error(`Failed to load frame: ${filename}`);
                  reject(new Error(`Failed to load frame: ${filename}`));
                };
                img.src = url;
              });
            })
          );
        }

        if (isMounted) {
          imagesRef.current = loadedImages;
          setImages(loadedImages);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error loading frames:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load frames');
          setIsLoading(false);
        }
      }
    };

    loadFrames();

    return () => {
      isMounted = false;
    };
  }, [zipUrl, totalFrames, onProgress]);

  const getFrame = useCallback(
    (progress: number): HTMLImageElement | null => {
      const frameImages = imagesRef.current;
      if (frameImages.length === 0) return null;

      // Clamp progress between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      // Map progress to frame index
      const frameIndex = Math.min(
        Math.floor(clampedProgress * frameImages.length),
        frameImages.length - 1
      );

      return frameImages[frameIndex] || null;
    },
    []
  );

  return {
    images,
    isLoading,
    loadProgress,
    error,
    getFrame,
  };
};
