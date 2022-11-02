import React from "react";
import {useEthers } from '@usedapp/core';
import { usePools } from "./hooks";
import styles from './styles';
import {uniswapLogo} from './assets';
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const {account} = useEthers();
  const [loading, pools] = usePools();


 return (
  <div className={styles.container}>
       <div className={styles.innerContainer}>
       <header className={styles.header}>
        <img 
          src={uniswapLogo}
          alt="uniswap logo"
          className="w-30 h-20 object-contain"
        />
        <WalletButton />
       </header>
       <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>CharlySwap IO</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>
          
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
            <div className="pink_gradient"/>
            <div className={styles.exchange}>
              {account ? (
                loading ? (
                  <Loader title="Loading pools... Please wait"/>
                ) : <Exchange pools={pools}/>
              ) : <Loader title="Plase connect your wallet"/>
              }
            </div>
            <div className="blue_gradient"/>
            </div>
          </div>
        </div>
       </div>
  </div>
 )
};

export default App;
