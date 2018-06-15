import FeatureTest from '../featureTest'

export const serviceWorker = FeatureTest.NavigatorContains('serviceWorker')

export default serviceWorker