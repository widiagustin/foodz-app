import { Provider } from 'react-redux'
import '../../styles/globals.css'
import { wrapper, store } from '../app/store'
import Layout from '../components/Layout'

function MyApp ({ Component, ...rest }) {
  const { props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
