import backgroundSync_ from './features/backgroundSync'
export const backgroundSync = backgroundSync_

import bluetooth_ from './features/bluetooth'
export const bluetooth = bluetooth_

import credentials_ from './features/credentials'
export const credentials = credentials_

import deviceMemory_ from './features/deviceMemory'
export const deviceMemory = deviceMemory_

import geolocation_ from './features/geolocation'
export const geolocation = geolocation_

import installedRelatedApps_ from './features/installedRelatedApps'
export const installedRelatedApps = installedRelatedApps_

import manifest_ from './features/manifest'
export const manifest  = manifest_

import mediaCapabilities_ from './features/mediaCapabilities'
export const mediaCapabilities = mediaCapabilities_

import mediaSession_ from './features/mediaSession'
export const mediaSession = mediaSession_

import nfc_ from './features/nfc'
export const nfc = nfc_

import offlineCache_ from './features/offlineCache'
export const offlineCache = offlineCache_

import paymentRequest_ from './features/paymentRequest'
export const paymentRequest = paymentRequest_

import persistentStorageRequest_ from './features/persistentStorageRequest'
export const persistentStorageRequest  = persistentStorageRequest_

import pushNotifications_ from './features/pushNotifications'
export const pushNotifications = pushNotifications_

import storageEstimation_ from './features/storageEstimation'
export const storageEstimation = storageEstimation_

import share_ from './features/share'
export const share = share_

import serviceWorker_ from './features/serviceWorker'
export const serviceWorker = serviceWorker_

import notifications_ from './features/notifications'
export const notifications = notifications_

// import needed for TypeScript to be able to generate proper type definitions for re-exports
import FeaturesTest from './featureTest'

const features = {
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

export default features