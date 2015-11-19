/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import QuestObjectiveInformations = require('./quest-objective-informations');
import QuestActiveInformations = require('./quest-active-informations');
declare class QuestActiveDetailedInformations extends QuestActiveInformations implements INetworkType {
    static ID: number;
    stepId: number;
    objectives: QuestObjectiveInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_QuestActiveDetailedInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_QuestActiveDetailedInformations(param1: ICustomDataInput): void;
}
export = QuestActiveDetailedInformations;
