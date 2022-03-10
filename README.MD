//새파일 Ctrl + n , 새폴더 Ctrl + Shift + n
@yarn start --reset-cache
@ React-Native guthub https://github.com/react-native-community
@picker 공식 github https://github.com/react-native-picker/picker
npm install @react-native-picker/picker --save

ios폴더에서 실행
npx pod-install
 
 import {Picker} from '@react-native-picker/picker';

@ slider github https://github.com/callstack/react-native-slider
npm install --save @react-native-community/slider

ios 폴더에서 실행
npx pod-install
 
 import Slider from '@react-native-community/slider';
 
@react-native-community/slider version	Required React Native Version
4.x.x	>=0.60; >=0.62 (on Windows);
3.1.x	>=0.60
2.x.x	>= 0.60
1.x.x	<= 0.59
 

@https://picsum.photos/id/237/200/300 // picsum photos 

@ React-native-navigation 공식 문서 https://reactnavigation.org/docs/getting-started
@ React-native-navigation 다운로드
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

▼▼▼android/app/src/main/java/<your package name>/MainActivity.java 위치 아래 코드 추가▼▼▼
import android.os.Bundle;
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
 

@ ios폴더에서
npx pod-install ios


import { NavigationContainer } from '@react-navigation/native';

@ native-stack 다운로드
npm install @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

@ drawer 다운로드
npm install @react-navigation/drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
npm install react-native-gesture-handler react-native-reanimated
import 'react-native-gesture-handler';


**해당 애러 발생 시 참고 !! **
TypeError: undefined is not an object (evaluating 'InnerNativeModule.installCoreFunctions')
https://stackoverflow.com/questions/70968067/typeerror-undefined-is-not-an-object-evaluating-innernativemodule-installcore


@ Tab 다운로드
npm install @react-navigation/bottom-tabs


@ react native vector-icons
https://github.com/oblador/react-native-vector-icons
npm install --save react-native-vector-icons
영상 참고 !!


@WebView 설치
npm install --save react-native-webview
react-native link react-native-webview

stackoverflow : https://stackoverflow.com/questions/53854771/focus-the-input-in-the-webview-with-react-native


react native debuger







안드로이드 Firebase 구축하기
https://velog.io/@mayinjanuary/React-Native-Firebase-%EB%A1%9C-%ED%91%B8%EC%89%AC-%EC%95%8C%EB%A6%BC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%84%B8%ED%8C%85

npm install --save @react-native-firebase/app
yarn add @react-native-firebase/messaging
com.powergen.wonhyeok


안드로이드 자체 알림 기능
https://dev-yakuza.posstree.com/ko/react-native/react-native-push-notification/
변수및 설정 가이드 : https://github.com/zo0r/react-native-push-notification#local-notifications
npm install --save react-native-push-notification


안드로이드 빌드 하는 방법!! 
https://yannichoongs.tistory.com/181