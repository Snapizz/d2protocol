/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanOption = require('./human-option');
import IndexedEntityLook = require('../../look/indexed-entity-look');
declare class HumanOptionFollowers extends HumanOption implements INetworkType {
    static ID: number;
    followingCharactersLook: IndexedEntityLook[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanOptionFollowers(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanOptionFollowers(param1: ICustomDataInput): void;
}
export = HumanOptionFollowers;
