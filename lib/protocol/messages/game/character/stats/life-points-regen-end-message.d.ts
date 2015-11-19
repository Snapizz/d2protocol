/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import UpdateLifePointsMessage = require('./update-life-points-message');
declare class LifePointsRegenEndMessage extends UpdateLifePointsMessage {
    static ID: number;
    lifePointsGained: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_LifePointsRegenEndMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_LifePointsRegenEndMessage(param1: ICustomDataInput): void;
}
export = LifePointsRegenEndMessage;
