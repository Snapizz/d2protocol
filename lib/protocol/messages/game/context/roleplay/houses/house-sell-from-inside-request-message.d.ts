/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import HouseSellRequestMessage = require('./house-sell-request-message');
declare class HouseSellFromInsideRequestMessage extends HouseSellRequestMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseSellFromInsideRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseSellFromInsideRequestMessage(param1: ICustomDataInput): void;
}
export = HouseSellFromInsideRequestMessage;
