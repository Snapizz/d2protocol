/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../../custom-data-wrapper';
import EntityLook = require('../../../../look/entity-look');
declare class PartyCompanionBaseInformations implements INetworkType {
    static ID: number;
    indexId: number;
    companionGenericId: number;
    entityLook: EntityLook;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyCompanionBaseInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyCompanionBaseInformations(param1: ICustomDataInput): void;
}
export = PartyCompanionBaseInformations;
