/** @jsxImportSource @emotion/react */
import {
  ImgHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

import * as styles from './Image.style';

const dummyPlaceholderImage = 'https://i.stack.imgur.com/y9DpT.jpg';
const dummyErrorImage =
  'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2629&q=80';

type OmitImgAttributes = 'css' | 'onLoad' | 'onError';

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, OmitImgAttributes> {
  className?: string;
  onLoadComplete?: (imageElement: HTMLImageElement) => void;
  onLoadError?: () => void;
}

export default function Image(props: ImageProps) {
  const {
    src = '',
    width = '100%',
    height = 'auto',
    className = '',
    loading = 'lazy',
    onLoadComplete,
    onLoadError,
    ...restProps
  } = props;

  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageLoad = useCallback(() => {
    if (!imageRef.current) {
      return;
    }

    setIsLoaded(true);
    onLoadComplete?.(imageRef.current);
  }, [onLoadComplete]);

  const handleImageError = useCallback(() => {
    if (!imageRef.current) {
      return;
    }

    setHasError(true);
    onLoadError?.();
  }, [onLoadError]);

  useEffect(() => {
    if (!src || !imageRef.current) {
      return;
    }

    imageRef.current.onload = handleImageLoad;
    imageRef.current.onerror = handleImageError;
    imageRef.current.src = src;
  }, [handleImageError, handleImageLoad, src]);

  return (
    <div
      className={classNames('hermes-image-container', className)}
      css={[styles.container(width, height)]}
    >
      <img
        ref={imageRef}
        className="hermes-image"
        css={styles.image}
        src={src}
        loading={loading}
        {...restProps}
      />
      <div
        className="hermes-image-placeholder"
        css={[
          styles.placeholder,
          isLoaded && !hasError && styles.isLoadComplete,
        ]}
      >
        <img
          css={styles.placeholderImage}
          src={hasError ? dummyErrorImage : dummyPlaceholderImage}
          loading={loading}
        />
      </div>
    </div>
  );
}
