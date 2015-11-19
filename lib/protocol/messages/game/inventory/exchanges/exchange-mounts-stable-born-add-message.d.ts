/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeMountsStableAddMessage = require('./exchange-mounts-stable-add-message');
declare class ExchangeMountsStableBornAddMessage extends ExchangeMountsStableAddMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeMountsStableBornAddMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeMountsStableBornAddMessage(param1: ICustomDataInput): void;
}
export = ExchangeMountsStableBornAddMessage;
