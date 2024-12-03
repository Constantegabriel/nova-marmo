// next.config.ts
import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true, // Garante boas práticas do React
  swcMinify: true, // Habilita o minificador SWC (método de otimização)
};

export default config;
