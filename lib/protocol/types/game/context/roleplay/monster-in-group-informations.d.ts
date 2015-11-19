/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
import EntityLook = require('../../look/entity-look');
declare class MonsterInGroupInformations extends MonsterInGroupLightInformations implements INetworkType {
    static ID: number;
    look: EntityLook;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MonsterInGroupInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MonsterInGroupInformations(param1: ICustomDataInput): void;
}
export = MonsterInGroupInformations;
