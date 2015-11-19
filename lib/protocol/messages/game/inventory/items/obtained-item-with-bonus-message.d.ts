/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObtainedItemMessage = require('./obtained-item-message');
declare class ObtainedItemWithBonusMessage extends ObtainedItemMessage {
    static ID: number;
    bonusQuantity: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObtainedItemWithBonusMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObtainedItemWithBonusMessage(param1: ICustomDataInput): void;
}
export = ObtainedItemWithBonusMessage;
