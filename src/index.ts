import ambientLight_ from './features/ambientLight'
export const ambientLight = ambientLight_

import backgroundSync_ from './features/backgroundSync'
export const backgroundSync = backgroundSync_

import battery_ from './features/battery'
export const battery = battery_

import bluetooth_ from './features/bluetooth'
export const bluetooth = bluetooth_

import connection_ from './features/connection'
export const connection = connection_

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

import media_ from './features/media'
export const media = media_

import mediaCapabilities_ from './features/mediaCapabilities'
export const mediaCapabilities = mediaCapabilities_

import mediaSession_ from './features/mediaSession'
export const mediaSession = mediaSession_

import nfc_ from './features/nfc'
export const nfc = nfc_

import notifications_ from './features/notifications'
export const notifications = notifications_

import offlineCache_ from './features/offlineCache'
export const offlineCache = offlineCache_

import online_ from './features/online'
export const online = online_

import paymentRequest_ from './features/paymentRequest'
export const paymentRequest = paymentRequest_

import persistentStorageRequest_ from './features/persistentStorageRequest'
export const persistentStorageRequest  = persistentStorageRequest_

import proximity_ from './features/proximity'
export const proximity = proximity_

import pushNotifications_ from './features/pushNotifications'
export const pushNotifications = pushNotifications_

import storageEstimation_ from './features/storageEstimation'
export const storageEstimation = storageEstimation_

import share_ from './features/share'
export const share = share_

import serviceWorker_ from './features/serviceWorker'
export const serviceWorker = serviceWorker_

import vibration_ from './features/vibration'
export const vibration = vibration_

import visibilityState_ from './features/visibilityState'
export const visibilityState = visibilityState_

// import needed for TypeScript to be able to generate proper type definitions for re-exports
import FeaturesTest from './featureTest'

const features = {
    ambientLight,
    backgroundSync,
    battery,
    bluetooth,
    connection,
    credentials,
    deviceMemory,
    geolocation,
    installedRelatedApps,
    manifest,
    media,
    mediaCapabilities,
    mediaSession,
    nfc,
    notifications,
    offlineCache,
    online,
    paymentRequest,
    persistentStorageRequest,
    proximity,
    pushNotifications,
    serviceWorker,
    share,
    storageEstimation,
    vibration,
    visibilityState
}

export default features