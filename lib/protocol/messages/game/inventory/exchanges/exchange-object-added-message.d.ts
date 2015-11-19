/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeObjectMessage = require('./exchange-object-message');
import ObjectItem = require('../../../../types/game/data/items/object-item');
declare class ExchangeObjectAddedMessage extends ExchangeObjectMessage {
    static ID: number;
    object: ObjectItem;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeObjectAddedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeObjectAddedMessage(param1: ICustomDataInput): void;
}
export = ExchangeObjectAddedMessage;
