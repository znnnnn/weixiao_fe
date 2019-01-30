// 此文件用来解决vscode stylesheet 自动补全问题

import { StyleSheet as RnStyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type StyleProps = Partial<ViewStyle | TextStyle | ImageStyle>;

export default {
    create(styles: { [className: string]: StyleProps }) {
        return RnStyleSheet.create(styles);
    }
};