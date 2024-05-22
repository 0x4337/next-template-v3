'use client';

import React, { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

const FlowTextEffect: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const noise2D = createNoise2D();

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const chars = textElement.innerText.split('');
    let frameId: number;

    const animate = (time: number) => {
      const textArray = chars.map((char: string, index: number) => {
        const noiseValue = noise2D(time * 0.0001, index * 0.05);
        return noiseValue > 0.5 ? char : getRandomChar();
      });

      textElement.innerText = textArray.join('');

      frameId = requestAnimationFrame(animate);
    };

    const getRandomChar = (): string => {
      const chars = '!@#$%^&*()_+{}:"<>?[];,./~`';
      return chars[Math.floor(Math.random() * chars.length)];
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [noise2D]);

  return (
    <div className="flow-text-container relative overflow-hidden h-[200px] w-full bg-black">
      <div className="splodge absolute w-full h-full"></div>
      <div
        ref={textRef}
        className="flow-text block absolute inset-0 text-white opacity-70"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae
        tempora omnis itaque eos est ipsum natus in officiis voluptate. Nemo
        quaerat reiciendis eligendi ipsa vel voluptatibus maxime velit
        excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Vero nesciunt dignissimos repudiandae ipsam mollitia ex dolorem
        reprehenderit deleniti corrupti. Odit reiciendis facere libero.
      </div>
    </div>
  );
};

export default FlowTextEffect;
