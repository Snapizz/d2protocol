/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AlternativeMonstersInGroupLightInformations = require('./alternative-monsters-in-group-light-informations');
import GroupMonsterStaticInformations = require('./group-monster-static-informations');
declare class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations implements INetworkType {
    static ID: number;
    alternatives: AlternativeMonstersInGroupLightInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataInput): void;
}
export = GroupMonsterStaticInformationsWithAlternatives;
