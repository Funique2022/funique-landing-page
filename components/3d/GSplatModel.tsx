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
    let viewer: any = null;
    let mounted = true;

    const initViewer = async () => {
      if (!mounted || viewerRef.current) return;
      
      try {
        // Create DropInViewer instance
        viewer = new GaussianSplats3D.DropInViewer({
          gpuAcceleratedSort: true,
          sharedMemoryForWorkers: true,
          enableSIMDInSort: true,
          integerBasedSort: true,
          sphericalHarmonicsDegree: 0,
          antialiased: false,
        });

        // Add the viewer to the group
        if (groupRef.current && mounted) {
          groupRef.current.add(viewer);
        }

        // Load the PLY file
        if (mounted) {
          await viewer.addSplatScenes([{
            path: url,
            position: position,
            scale: scale,
            rotation: rotation,
            splatAlphaRemovalThreshold: 1,
            showLoadingUI: false,
          }]);
          
          if (mounted) {
            viewerRef.current = viewer;
            isLoadedRef.current = true;
          }
        }
      } catch (error: any) {
        console.error('Error loading GS model:', error);
        if (viewer && groupRef.current) {
          try {
            groupRef.current.remove(viewer);
            if (typeof viewer.dispose === 'function') {
              viewer.dispose();
            }
          } catch (e) {
            // Ignore disposal errors
          }
        }
      }
    };

    initViewer();

    return () => {
      mounted = false;
      // Cleanup
      if (viewerRef.current) {
        const currentViewer = viewerRef.current;
        viewerRef.current = null;
        isLoadedRef.current = false;
        
        // Defer cleanup to avoid "Scene disposed" errors
        setTimeout(() => {
          if (groupRef.current) {
            try {
              groupRef.current.remove(currentViewer);
            } catch (e) {
              // Ignore removal errors
            }
          }
          
          try {
            if (typeof currentViewer.dispose === 'function') {
              currentViewer.dispose();
            }
          } catch (e) {
            // Ignore disposal errors
          }
        }, 100);
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

