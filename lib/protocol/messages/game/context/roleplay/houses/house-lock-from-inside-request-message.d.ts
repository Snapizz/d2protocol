/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import LockableChangeCodeMessage = require('../lockable/lockable-change-code-message');
declare class HouseLockFromInsideRequestMessage extends LockableChangeCodeMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseLockFromInsideRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseLockFromInsideRequestMessage(param1: ICustomDataInput): void;
}
export = HouseLockFromInsideRequestMessage;
