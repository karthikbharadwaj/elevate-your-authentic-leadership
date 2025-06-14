
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    console.log('Starting background removal process...');
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'webgpu',
    });
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final dimensions: ${canvas.width}x${canvas.height}`);
    
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    console.log('Image converted to base64');
    
    console.log('Processing with segmentation model...');
    const result = await segmenter(imageData);
    
    console.log('Segmentation result:', result);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }
    
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    outputCtx.drawImage(canvas, 0, 0);
    
    const outputImageData = outputCtx.getImageData(
      0, 0,
      outputCanvas.width,
      outputCanvas.height
    );
    const data = outputImageData.data;
    
    for (let i = 0; i < result[0].mask.data.length; i++) {
      const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
      data[i * 4 + 3] = alpha;
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Mask applied successfully');
    
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Successfully created final blob');
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const AboutCoach = () => {
  const [profileImage, setProfileImage] = useState("/lovable-uploads/d57d57e5-7676-46fa-9888-c59301e86601.png");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Process the default image on component mount
    processDefaultImage();
  }, []);

  const processDefaultImage = async () => {
    try {
      setIsProcessing(true);
      const response = await fetch("/lovable-uploads/d57d57e5-7676-46fa-9888-c59301e86601.png");
      const blob = await response.blob();
      const img = await loadImage(blob);
      const processedBlob = await removeBackground(img);
      const processedUrl = URL.createObjectURL(processedBlob);
      setProfileImage(processedUrl);
    } catch (error) {
      console.error('Error processing default image:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              About Your Coach
            </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image Section */}
            <div className="text-center animate-fade-in-up">
              <div className="relative inline-block">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden glass-card relative">
                  {isProcessing ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--primary-light)]/20">
                      <div className="text-center">
                        <div className="animate-spin w-12 h-12 border-4 border-[var(--primary-color)] border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-[var(--text-color-secondary)]">Processing image...</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={profileImage}
                      alt="Executive Coach"
                      className="w-full h-full object-cover object-center scale-125"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 text-lg text-[var(--text-color)] leading-relaxed animate-fade-in-up">
              <p>
                I have been in the trenches, building high-performance tech teams for the last 15 years.
              </p>
              <p>
                I have been working with AI way before it became mainstream and realize firsthand its true potential and where it's going.
              </p>
              <p>
                As an Executive Coach, I help tech leaders gain career clarity, build confidence, and leverage executive presence to accelerate their careers. That often looks like getting exciting promotions faster and successfully navigating your new role.
              </p>
              <p>
                But it also means overcoming self-doubt, imposter syndrome, and anything else getting in the way that you might not even see.
              </p>
              
              <div className="mt-8 p-6 glass-card rounded-xl">
                <h3 className="text-2xl font-bold gradient-text mb-4">My Clients Are:</h3>
                <ul className="space-y-3">
                  {[
                    "Ambitious technology leaders feeling stuck or uncertain about their next career move",
                    "Dealing with conflict, high-pressure decisions, or team challenges",
                    "Struggling to navigate organizational politics",
                    "Lacking clarity and a roadmap for their career's next chapter",
                    "Having an inner critic that's using up too much mental energy",
                    "Wanting to strengthen confidence, communication, and leadership presence"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[var(--primary-color)] font-bold mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-xl font-semibold gradient-text">
                  That's where I come in.
                </p>
                <p className="mt-4">
                  I help you through a 3-month intensive 4P Leadership Compass program, enabling you to expand your leadership across the dimensions of Purpose, People, Presence & Progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
