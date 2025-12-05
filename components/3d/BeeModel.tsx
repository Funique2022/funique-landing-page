'use client';

import { GSplatModel } from './GSplatModel';

interface BeeModelProps {
  autoRotate?: boolean;
  modelIndex?: number;
}

export function BeeModel({ autoRotate = false, modelIndex = 0 }: BeeModelProps) {
  // Use the GS model from public/3dgs directory
  const modelUrl = '/3dgs/Bee_0423_clean.ply';
  
  return (
    <GSplatModel 
      url={modelUrl}
      autoRotate={autoRotate}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
    />
  );
}

