import { IAbstractConnectorOptions } from "../../helpers";
export interface IWalletLinkConnectorOptions extends IAbstractConnectorOptions {
    infuraId?: string;
    rpc?: {
        [chainId: number]: string;
    };
    chainId?: number;
    appName?: string;
    appLogoUrl?: string;
    darkMode?: boolean;
}
declare const ConnectToWalletLink: (WalletLink: any, opts: IWalletLinkConnectorOptions) => Promise<unknown>;
export default ConnectToWalletLink;
//# sourceMappingURL=walletlink.d.ts.map