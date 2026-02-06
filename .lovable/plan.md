
# Plan: Extract ZIP and Implement Frame-by-Frame Scroll Animation

## Overview
Extract the uploaded zip file containing 240 shoe rotation frames and implement a true HTML5 Canvas-based scroll animation that renders frames based on scroll position.

## Technical Approach

### Step 1: Extract ZIP File to Public Folder
Copy the zip file to the public folder and extract all 240 frame images:
```
public/frames/
  frame-001.jpg
  frame-002.jpg
  ...
  frame-240.jpg
```

The images will be placed in `public/frames/` so they can be referenced directly by URL path (e.g., `/frames/frame-001.jpg`).

### Step 2: Rewrite CanvasScrollSequence.tsx
Transform the current component from a single-image 3D transform approach to a true canvas-based frame sequence renderer:

**Key Implementation Details:**
- Preload all 240 images on component mount
- Use HTML5 Canvas API to draw frames
- Map scroll progress (0 to 1) to frame index (0 to 239)
- Use `requestAnimationFrame` for smooth rendering
- Implement image preloading with loading state
- Add responsive canvas sizing

**Component Structure:**
```text
+------------------------------------------+
|  CanvasScrollSequence                    |
|  +------------------------------------+  |
|  | Container (h-[500vh])              |  |
|  |  +------------------------------+  |  |
|  |  | Sticky Canvas (h-screen)     |  |  |
|  |  | - Preloads 240 images        |  |  |
|  |  | - Maps scroll -> frame index |  |  |
|  |  | - Draws current frame        |  |  |
|  |  +------------------------------+  |  |
|  |  | Text Overlays (preserved)    |  |  |
|  |  | - Fade in/out with scroll    |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
+------------------------------------------+
```

### Step 3: Optimize Performance
- Progressive image loading with visible loading indicator
- Use `useCallback` and `useMemo` to prevent unnecessary re-renders
- Throttle scroll events if needed
- Consider reducing to 120 frames (every 2nd) or 80 frames (every 3rd) if performance issues occur

## Files to Modify

| File | Action |
|------|--------|
| `user-uploads://ezgif-6aa656eaa3187d70-jpg.zip` | Extract to `public/frames/` |
| `src/components/CanvasScrollSequence.tsx` | Complete rewrite for canvas rendering |

## New CanvasScrollSequence Features
- True HTML5 Canvas rendering
- Frame preloading with progress indicator
- Scroll-to-frame mapping with easing
- Loading state with percentage
- Error handling for failed image loads
- Responsive canvas that maintains aspect ratio
- All existing text overlays preserved

## Expected Result
A cinematic, smooth scroll-driven animation where the shoe appears to rotate 360 degrees as the user scrolls, with text overlays fading in and out at appropriate scroll positions.
