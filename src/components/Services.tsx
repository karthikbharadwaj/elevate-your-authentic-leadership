
import React from 'react';
import { PersuasiveCopy } from './services/PersuasiveCopy';
import { FourPProgram } from './services/FourPProgram';
import { TransformationResults } from './services/TransformationResults';

export const Services = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <PersuasiveCopy />
        <FourPProgram />
        <TransformationResults />
      </div>
    </section>
  );
};
