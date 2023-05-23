import { useAddress, useMetamask} from '@thirdweb-dev/react'
//here address is used to fetch the connecting address and metamask for wallet
import Main from '../components/Home'
const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-white px-10 py-5 transition-all hover:bg-green text-white`,
}
export default function Home() {
  const connectWithMetamask= useMetamask()//connects wallet
  const address= useAddress() 
  const Auth=() =>{
     return (
    <div className={style.wrapper}>
      <button onClick={connectWithMetamask}
        className={style.connectWalletButton}
        >
        connect Metamask
      </button>
   
    </div>
  ) 
  }
  return <>{address ? <Main/> : Auth()}</>
 
}
