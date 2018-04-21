import FeatureTest from './featureTest';
declare global  {
    interface Window {
        ServiceWorkerRegistration: Function;
    }
    interface DOMTokenList {
        supports(token: string): boolean;
    }
    interface HTMLLinkElement {
        relList: DOMTokenList;
    }
    interface Navigator {
        budget: any;
        storage: any;
    }
    interface NotificationOptions {
        silent?: boolean;
        vibrate?: number;
    }
}
export declare const backgroundSync: FeatureTest;
export declare const bluetooth: FeatureTest;
export declare const credentials: FeatureTest & {
    password: FeatureTest;
} & {
    federated: FeatureTest;
};
export declare const deviceMemory: FeatureTest;
export declare const geolocation: FeatureTest;
export declare const installedRelatedApps: FeatureTest;
export declare const manifest: FeatureTest;
export declare const mediaCapabilities: FeatureTest;
export declare const mediaSession: FeatureTest;
export declare const nfc: FeatureTest;
export declare const notifications: FeatureTest;
export declare const offlineCache: FeatureTest;
export declare const paymentRequest: FeatureTest;
export declare const persistentStorageRequest: FeatureTest;
export declare const pushNotifications: FeatureTest & {
    silent: FeatureTest;
};
export declare const serviceWorker: FeatureTest;
export declare const share: FeatureTest;
export declare const storageEstimation: FeatureTest;
declare const _default: {
    backgroundSync: FeatureTest;
    bluetooth: FeatureTest;
    credentials: FeatureTest & {
        password: FeatureTest;
    } & {
        federated: FeatureTest;
    };
    deviceMemory: FeatureTest;
    geolocation: FeatureTest;
    installedRelatedApps: FeatureTest;
    manifest: FeatureTest;
    mediaCapabilities: FeatureTest;
    mediaSession: FeatureTest;
    nfc: FeatureTest;
    notifications: FeatureTest;
    offlineCache: FeatureTest;
    paymentRequest: FeatureTest;
    persistentStorageRequest: FeatureTest;
    pushNotifications: FeatureTest & {
        silent: FeatureTest;
    };
    serviceWorker: FeatureTest;
    share: FeatureTest;
    storageEstimation: FeatureTest;
};
export default _default;
