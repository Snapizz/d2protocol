/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import LockableStateUpdateAbstractMessage = require('./lockable-state-update-abstract-message');
declare class LockableStateUpdateHouseDoorMessage extends LockableStateUpdateAbstractMessage {
    static ID: number;
    houseId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_LockableStateUpdateHouseDoorMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_LockableStateUpdateHouseDoorMessage(param1: ICustomDataInput): void;
}
export = LockableStateUpdateHouseDoorMessage;
