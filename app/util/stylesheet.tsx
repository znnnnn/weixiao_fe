import { StyleSheet as RnStyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type StyleProps = Partial<ViewStyle | TextStyle | ImageStyle>;

export const StyleSheet = {
    create(styles: { [className: string]: StyleProps }) {
        return RnStyleSheet.create(styles);
    }
};