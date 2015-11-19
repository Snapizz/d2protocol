/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeStartOkCraftMessage = require('./exchange-start-ok-craft-message');
declare class ExchangeStartOkCraftWithInformationMessage extends ExchangeStartOkCraftMessage {
    static ID: number;
    skillId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeStartOkCraftWithInformationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeStartOkCraftWithInformationMessage(param1: ICustomDataInput): void;
}
export = ExchangeStartOkCraftWithInformationMessage;
