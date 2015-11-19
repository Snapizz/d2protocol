/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import BidExchangerObjectInfo = require('../../../../types/game/data/items/bid-exchanger-object-info');
declare class ExchangeTypesItemsExchangerDescriptionForUserMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    itemTypeDescriptions: BidExchangerObjectInfo[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(param1: ICustomDataInput): void;
}
export = ExchangeTypesItemsExchangerDescriptionForUserMessage;
