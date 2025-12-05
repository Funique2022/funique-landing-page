'use client';

import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

interface GSplatModelProps {
  url: string;
  autoRotate?: boolean;
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number, number];
}

export function GSplatModel({ 
  url, 
  autoRotate = false,
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0, 1]
}: GSplatModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const viewerRef = useRef<any>(null);
  const { scene, camera, gl } = useThree();
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (!viewerRef.current && !isLoadedRef.current) {
      isLoadedRef.current = true;
      
      // Create DropInViewer instance
      const viewer = new GaussianSplats3D.DropInViewer({
        gpuAcceleratedSort: true,
        sharedMemoryForWorkers: true,
        enableSIMDInSort: true,
        integerBasedSort: true,
        sphericalHarmonicsDegree: 0,
        antialiased: false,
      });

      // Add the viewer to the group
      if (groupRef.current) {
        groupRef.current.add(viewer);
      }

      // Load the PLY file
      viewer.addSplatScenes([{
        path: url,
        position: position,
        scale: scale,
        rotation: rotation,
        splatAlphaRemovalThreshold: 1,
        showLoadingUI: false,
      }]).catch((error: any) => {
        console.error('Error loading GS model:', error);
        isLoadedRef.current = false;
      });

      viewerRef.current = viewer;
    }

    return () => {
      // Cleanup
      if (viewerRef.current && groupRef.current) {
        try {
          groupRef.current.remove(viewerRef.current);
          // Dispose viewer if it has a dispose method
          if (typeof (viewerRef.current as any).dispose === 'function') {
            (viewerRef.current as any).dispose();
          }
        } catch (error: any) {
          console.error('Error disposing viewer:', error);
        }
        viewerRef.current = null;
        isLoadedRef.current = false;
      }
    };
  }, [url, position, scale, rotation]);

  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    
    // Update viewer if it exists
    if (viewerRef.current && typeof (viewerRef.current as any).update === 'function') {
      (viewerRef.current as any).update();
    }
  });

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} />
      <group ref={groupRef} />
    </>
  );
}

