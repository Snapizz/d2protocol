import INetworkType = require('./network-type');
declare class ProtocolTypeManager {
    private static _list;
    constructor();
    static getInstance(networkType: any, param2: number): INetworkType;
}
export = ProtocolTypeManager;
