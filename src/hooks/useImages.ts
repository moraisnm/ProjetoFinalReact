import { useState, useEffect } from 'react';

interface ImagesData {
  heroImage: string;
  backgroundVideo: string;
  carouselImages: string[];
  showcaseImages: string[];
  bannerImages: string[];
  reviewsImage: string;
  sofaImage: string;
  sofaVideo1: string;
  sofaVideo2: string;
  armStyleIcon1: string;
  armStyleIcon2: string;
  flipBackIcon1: string;
  flipBackIcon2: string;
  reviewImage: string;
  dimensionsImage: string;
  recommendationImages: string[];
  featureImage1: string;
  featureImage2: string;
  featureImage3: string;
  featureImage4: string;
  featureImage5: string;
  imagesGrid: string[];
  grid2: string[],
}

const useImages = () => {
  const [images, setImages] = useState<ImagesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/images.json')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { images, loading, error };
};

export default useImages;