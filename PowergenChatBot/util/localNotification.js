import {
  StyleSheet,
  View,
  Text,
  Button,
  AppState,
  PushNotificationIOS,
} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';

const _handleAppStateChange = (nextAppState) => {
  if (nextAppState === 'active') {
    _registerLocalNotification();
  }
};

const _registerLocalNotification = () => {
  PushNotification.setApplicationIconBadgeNumber(0);
  PushNotification.cancelAllLocalNotifications();

  PushNotification.createChannel(
    {
      channelId: "wonhyeok", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );

  PushNotification.localNotification({
    channelId:"wonhyeok",
    vibrate: false, // 진동
    vibration: 300, // 진동 강도
    priority: 'default', // 우선사항 정도
    visibility: 'public', // 공개 범위
    importance: 'high', // 중요성 정도
    playSound: false, // 알림 소리 설정

    // repeatType: 'minute', // 반복간격,
    // date: new Date(Date.now() + 5 * 1000),
    date: new Date(Date.now()),

    message: "data",
    actions: '["Yes"]',
  });
};

export default {
  register: () => {
    // IOS 적용 시
    //   register: asunc () => {
    // PushNotification.configure({
    //     onNotification:function(notification) {
    //         notification.finish(PushNotificationIOS)
    //     },
    //     popInitialNotification:true
    // })
    _registerLocalNotification();
    AppState.addEventListener('change', _handleAppStateChange);
  },
  unregister: () => {
    AppState.addEventListener('change', _handleAppStateChange).remove();

  },
};
