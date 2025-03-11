import { ISponsor } from './types';
import SponsorCard from './SponsorCard';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { useEffect, useState, useLayoutEffect } from 'react';
import './index.css';

interface SponsorCarrouselProps {
  sponsors: ISponsor[];
  right?: boolean;
}

export default function SponsorCarrousel({ sponsors, right = true }: SponsorCarrouselProps) {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [measuredWidth, setMeasuredWidth] = useState(0);

  useLayoutEffect(() => {
    // Set a timeout to ensure the width is measured correctly after the component has mounted
    const timeout = setTimeout(() => {
      if (width > 0) {
        setMeasuredWidth(width);
      } else {
        // Fallback width if the initial measurement is zero
        setMeasuredWidth(300); // Adjust this value as needed
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [width]);

  useEffect(() => {
    let controls;
    const initialPos = right ? 0 : -width / 2;
    const finalPos = right ? -width / 2 : 0 + 8;

    controls = animate(xTranslation, [initialPos, finalPos], {
      ease: 'linear',
      duration: sponsors.length * 3,
      repeat: Infinity,
      repeatType: 'loop',
    });

    return controls.stop;
  }, [width, xTranslation, right, sponsors.length]);

  const halfWidth = measuredWidth / 2;

  return (
    <div className='relative overflow-hidden h-32 mask-fade' style={{ width: halfWidth }}>
      <motion.div className='absolute flex gap-4' style={{ x: xTranslation }} ref={ref}>
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </motion.div>
    </div>
  );
}