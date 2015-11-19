/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class GameRolePlayNpcQuestFlag implements INetworkType {
    static ID: number;
    questsToValidId: number[];
    questsToStartId: number[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataInput): void;
}
export = GameRolePlayNpcQuestFlag;
