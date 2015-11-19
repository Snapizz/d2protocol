/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ActorAlignmentInformations = require('./actor-alignment-informations');
declare class ActorExtendedAlignmentInformations extends ActorAlignmentInformations implements INetworkType {
    static ID: number;
    honor: number;
    honorGradeFloor: number;
    honorNextGradeFloor: number;
    aggressable: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataInput): void;
}
export = ActorExtendedAlignmentInformations;
