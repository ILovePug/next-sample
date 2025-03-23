import { PHASE_PRODUCTION_SERVER } from 'next/constants';


export default (phase: string) => {

  // only add for production runtime
  const assetPrefix = phase === PHASE_PRODUCTION_SERVER ? '/myapp' : '';

  console.log({assetPrefix});

  return {
    assetPrefix
  };
}
