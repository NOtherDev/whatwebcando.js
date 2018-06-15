import FeatureTest from '../featureTest';
declare global  {
    interface NotificationOptions {
        silent?: boolean;
        vibrate?: number;
    }
}
declare const notifications: FeatureTest;
export default notifications;
