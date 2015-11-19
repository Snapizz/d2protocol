/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PaddockInformationsForSell = require('../../../../../types/game/paddock/paddock-informations-for-sell');
declare class PaddockToSellListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    pageIndex: number;
    totalPage: number;
    paddockList: PaddockInformationsForSell[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockToSellListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockToSellListMessage(param1: ICustomDataInput): void;
}
export = PaddockToSellListMessage;
