import FeatureTest from '../featureTest'

export const offlineCache = FeatureTest.WindowContains('caches')

export default offlineCache