'use client';

import { useState } from 'react';
import { Scene } from './Scene';
import { BeeModel } from './BeeModel';
import { BeetleModel } from './BeetleModel';

type ModelType = 'bee' | 'beetle';

interface ModelViewerProps {
  modelType: ModelType;
  modelIndex?: number;
  autoRotate?: boolean;
}

export function ModelViewer({ modelType, modelIndex = 0, autoRotate = false }: ModelViewerProps) {
  return (
    <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Scene className="w-full h-full">
        {modelType === 'bee' ? (
          <BeeModel autoRotate={autoRotate} modelIndex={modelIndex} />
        ) : (
          <BeetleModel autoRotate={autoRotate} />
        )}
      </Scene>
    </div>
  );
}

