import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider
        desiredChainId ={ChainId.Goerli}
        chainRpc={{
          [ChainId.Goerli]:'https://wider-alien-river.ethereum-goerli.discover.quiknode.pro/b7d0988d903e4e1561abd784d52ae62b0e274235/'
        }}
      >
      <ThemeProvider>
      <Component {...pageProps}/>
      </ThemeProvider>
    
      </ThirdwebProvider>
    )
}

export default MyApp
