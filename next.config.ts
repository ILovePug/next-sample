import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants';


export default (phase: string) => {

  const isProductionRuntime = phase !== PHASE_DEVELOPMENT_SERVER && phase !== PHASE_PRODUCTION_BUILD;

  // only add for production runtime
  const assetPrefix = isProductionRuntime ? '/myapp' : '';

  console.log({assetPrefix});

  return {
    assetPrefix
  };
}
