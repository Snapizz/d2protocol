/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeCraftResultMessage = require('./exchange-craft-result-message');
import ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container');
declare class ExchangeCraftResultWithObjectDescMessage extends ExchangeCraftResultMessage {
    static ID: number;
    objectInfo: ObjectItemNotInContainer;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeCraftResultWithObjectDescMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeCraftResultWithObjectDescMessage(param1: ICustomDataInput): void;
}
export = ExchangeCraftResultWithObjectDescMessage;
