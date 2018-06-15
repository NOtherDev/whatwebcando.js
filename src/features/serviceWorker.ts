import FeatureTest from '../featureTest'

export const serviceWorker = FeatureTest.navigatorContains('serviceWorker')

export default serviceWorker