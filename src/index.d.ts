export declare const backgroundSync: FeaturesTest;
export declare const bluetooth: FeaturesTest;
export declare const credentials: FeaturesTest & {
    password: FeaturesTest;
} & {
    federated: FeaturesTest;
};
export declare const deviceMemory: FeaturesTest;
export declare const geolocation: FeaturesTest;
export declare const installedRelatedApps: FeaturesTest;
export declare const manifest: FeaturesTest;
export declare const mediaCapabilities: FeaturesTest;
export declare const mediaSession: FeaturesTest;
export declare const nfc: FeaturesTest;
export declare const offlineCache: FeaturesTest;
export declare const paymentRequest: FeaturesTest;
export declare const persistentStorageRequest: FeaturesTest;
export declare const pushNotifications: FeaturesTest & {
    silent: FeaturesTest;
};
export declare const storageEstimation: FeaturesTest;
export declare const share: FeaturesTest;
export declare const serviceWorker: FeaturesTest;
export declare const notifications: FeaturesTest;
import FeaturesTest from './featureTest';
declare const features: {
    backgroundSync: FeaturesTest;
    bluetooth: FeaturesTest;
    credentials: FeaturesTest & {
        password: FeaturesTest;
    } & {
        federated: FeaturesTest;
    };
    deviceMemory: FeaturesTest;
    geolocation: FeaturesTest;
    installedRelatedApps: FeaturesTest;
    manifest: FeaturesTest;
    mediaCapabilities: FeaturesTest;
    mediaSession: FeaturesTest;
    nfc: FeaturesTest;
    notifications: FeaturesTest;
    offlineCache: FeaturesTest;
    paymentRequest: FeaturesTest;
    persistentStorageRequest: FeaturesTest;
    pushNotifications: FeaturesTest & {
        silent: FeaturesTest;
    };
    serviceWorker: FeaturesTest;
    share: FeaturesTest;
    storageEstimation: FeaturesTest;
};
export default features;
