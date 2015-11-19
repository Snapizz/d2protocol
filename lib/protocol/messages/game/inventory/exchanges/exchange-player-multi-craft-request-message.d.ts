/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeRequestMessage = require('./exchange-request-message');
declare class ExchangePlayerMultiCraftRequestMessage extends ExchangeRequestMessage {
    static ID: number;
    target: number;
    skillId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangePlayerMultiCraftRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangePlayerMultiCraftRequestMessage(param1: ICustomDataInput): void;
}
export = ExchangePlayerMultiCraftRequestMessage;
