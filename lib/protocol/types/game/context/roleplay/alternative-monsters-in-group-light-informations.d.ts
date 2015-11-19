/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
declare class AlternativeMonstersInGroupLightInformations implements INetworkType {
    static ID: number;
    playerCount: number;
    monsters: MonsterInGroupLightInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataInput): void;
}
export = AlternativeMonstersInGroupLightInformations;
