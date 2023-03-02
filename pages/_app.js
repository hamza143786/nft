import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

/**
 * The chain ID 137 represents the Matic testnet
 * the 'injected' connectoris a web3 connection method used by Metamask
 */
const supportedChainIDs =[80001]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }){
  return(
  <ThirdwebWeb3Provider
  supportedChainIds={supportedChainIDs}
  connectors={connectors}
  >
  <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
