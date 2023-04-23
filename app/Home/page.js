"use client"
import { useEvmNativeBalance } from '@moralisweb3/next';

function HomePage() {
    const address = '0x4C8CA0a7287F481bc21cbcc4829Db794322b55c7';
    const { data: nativeBalance } = useEvmNativeBalance({ address });
    return (
        <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
        </div>
    );
}

export default HomePage;
