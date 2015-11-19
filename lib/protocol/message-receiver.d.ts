import { INetworkMessage } from './network-message';
import { ICustomDataInput } from './custom-data-wrapper';
declare class MessageReceiver {
    private static _list;
    constructor();
    static parse(param1: ICustomDataInput, param2: number, param3: number): INetworkMessage;
}
export = MessageReceiver;
