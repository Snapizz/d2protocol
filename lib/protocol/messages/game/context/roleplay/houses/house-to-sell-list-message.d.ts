/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import HouseInformationsForSell = require('../../../../../types/game/house/house-informations-for-sell');
declare class HouseToSellListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    pageIndex: number;
    totalPage: number;
    houseList: HouseInformationsForSell[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseToSellListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseToSellListMessage(param1: ICustomDataInput): void;
}
export = HouseToSellListMessage;
