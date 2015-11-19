/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightResultAdditionalData = require('./fight-result-additional-data');
declare class FightResultPvpData extends FightResultAdditionalData implements INetworkType {
    static ID: number;
    grade: number;
    minHonorForGrade: number;
    maxHonorForGrade: number;
    honor: number;
    honorDelta: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightResultPvpData(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightResultPvpData(param1: ICustomDataInput): void;
}
export = FightResultPvpData;
