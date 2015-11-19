/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class QuestObjectiveInformations implements INetworkType {
    static ID: number;
    objectiveId: number;
    objectiveStatus: boolean;
    dialogParams: string[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_QuestObjectiveInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_QuestObjectiveInformations(param1: ICustomDataInput): void;
}
export = QuestObjectiveInformations;
