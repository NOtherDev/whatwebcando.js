import FeatureTest from '../featureTest'

export const offlineCache = FeatureTest.windowContains('caches')

export default offlineCache