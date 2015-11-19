/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
import MonsterInGroupInformations = require('./monster-in-group-informations');
declare class GroupMonsterStaticInformations implements INetworkType {
    static ID: number;
    mainCreatureLightInfos: MonsterInGroupLightInformations;
    underlings: MonsterInGroupInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GroupMonsterStaticInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GroupMonsterStaticInformations(param1: ICustomDataInput): void;
}
export = GroupMonsterStaticInformations;
