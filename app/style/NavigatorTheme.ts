import {DefaultTheme, Theme} from '@react-navigation/native'
import MainColors from './MainColors'

export default {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        card: MainColors.backgroundSecondary,
        text: MainColors.textPrimary,
    }
} as Theme