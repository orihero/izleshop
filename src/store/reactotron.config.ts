import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { reactotronRedux } from 'reactotron-redux'
//@ts-ignore
const reactotron = Reactotron
    ?.setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux()) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    ?.configure() // controls connection & communication settings
    ?.useReactNative() // add all built-in react native plugins
    ?.connect() // let's connect!

export default reactotron