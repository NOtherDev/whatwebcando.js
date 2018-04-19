import FeatureTest from './featureTest'

declare global {
    interface Window {
        ServiceWorkerRegistration: Function
    }
    interface DOMTokenList {
        supports(token: string): boolean
    }
    interface HTMLLinkElement {
        relList: DOMTokenList
    }
}

export const backgroundSync = FeatureTest.ServiceWorkerRegistrationContains('sync')
export const manifest = FeatureTest.Raw(() => document.createElement('link').relList.supports('manifest'))
export const offlineCache = FeatureTest.WindowContains('caches')
export const pushNotifications = FeatureTest.ServiceWorkerRegistrationContains('pushManager')
export const serviceWorker = FeatureTest.NavigatorContains('serviceWorker')
export const share = FeatureTest.NavigatorContains('share')

export default {
    backgroundSync,
    manifest,
    offlineCache,
    pushNotifications,
    serviceWorker,
    share
}