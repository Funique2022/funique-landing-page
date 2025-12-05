'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface BeetleModelProps {
  autoRotate?: boolean;
  color?: string;
}

export function BeetleModel({ autoRotate = false, color = '#4a5568' }: BeetleModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} />
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.8, 1]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Head */}
        <mesh position={[0.8, 0, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Legs */}
        {[-0.5, 0, 0.5].map((x, i) => (
          <group key={i}>
            <mesh position={[x, -0.5, 0.4]}>
              <cylinderGeometry args={[0.05, 0.05, 0.6]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[x, -0.5, -0.4]}>
              <cylinderGeometry args={[0.05, 0.05, 0.6]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </group>
        ))}
        {/* Antennae */}
        <mesh position={[1.1, 0.3, 0.2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[1.1, 0.3, -0.2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </>
  );
}

