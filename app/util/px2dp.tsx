import {Dimensions} from 'react-native';

// 58 app 只有豎屏模式，所以可以只獲取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默認給圖是 640
const uiWidthPx = 640;

function px2dp(uiElementPx:number) {
return uiElementPx *  deviceWidthDp / uiWidthPx;
}

export default px2dp;