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
    interface Navigator {
        budget: any
        storage: any
    }
    interface NotificationOptions {
        silent?: boolean
        vibrate?: number
    }
}

export const backgroundSync = FeatureTest.ServiceWorkerRegistrationContains('sync')
export const bluetooth = FeatureTest.NavigatorContains('bluetooth')

export const credentials = FeatureTest.WindowContains('credentials')
    .subtest<{password: FeatureTest}>('password', FeatureTest.WindowContains('PasswordCredential'))
    .subtest<{federated: FeatureTest}>('federated', FeatureTest.WindowContains('FederatedCredential'))

export const deviceMemory = FeatureTest.NavigatorContains('deviceMemory')
export const geolocation = FeatureTest.NavigatorContains('geolocation')
export const installedRelatedApps = FeatureTest.NavigatorContains('getInstalledRelatedApps')
export const manifest = FeatureTest.Raw(() => document.createElement('link').relList.supports('manifest'))
export const mediaCapabilities = FeatureTest.NavigatorContains('mediaCapabilities')
export const mediaSession = FeatureTest.NavigatorContains('mediaSession')
export const nfc = FeatureTest.NavigatorContains('nfc')

export const notifications = FeatureTest.Raw(() => {
    try {
        if (!('Notification' in window)) {
            return false
        }
        if ('silent' in Notification.prototype) {
            new Notification('test', {silent: true, vibrate: 100})
        }
        return true
    } catch (e) {
        return e.message.indexOf('Silent') !== -1
    }
})

export const offlineCache = FeatureTest.WindowContains('caches')
export const paymentRequest = FeatureTest.WindowContains('paymentRequest')
export const persistentStorageRequest = FeatureTest.ContainedIn(navigator.storage, 'persist')
export const pushNotifications = FeatureTest.ServiceWorkerRegistrationContains('pushManager')
    .subtest<{silent: FeatureTest}>('silent', FeatureTest.ContainedIn(navigator.budget, 'reserve'))

export const serviceWorker = FeatureTest.NavigatorContains('serviceWorker')
export const share = FeatureTest.NavigatorContains('share')
export const storageEstimation = FeatureTest.ContainedIn(navigator.storage, 'estimate')

export default {
    backgroundSync,
    bluetooth,
    credentials,
    deviceMemory,
    geolocation,
    installedRelatedApps,
    manifest,
    mediaCapabilities,
    mediaSession,
    nfc,
    notifications,
    offlineCache,
    paymentRequest,
    persistentStorageRequest,
    pushNotifications,
    serviceWorker,
    share,
    storageEstimation
}