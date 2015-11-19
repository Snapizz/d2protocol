/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class ActorAlignmentInformations implements INetworkType {
    static ID: number;
    alignmentSide: number;
    alignmentValue: number;
    alignmentGrade: number;
    characterPower: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ActorAlignmentInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ActorAlignmentInformations(param1: ICustomDataInput): void;
}
export = ActorAlignmentInformations;
