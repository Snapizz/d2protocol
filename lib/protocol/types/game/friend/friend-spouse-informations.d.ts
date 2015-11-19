/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import EntityLook = require('../look/entity-look');
import BasicGuildInformations = require('../context/roleplay/basic-guild-informations');
declare class FriendSpouseInformations implements INetworkType {
    static ID: number;
    spouseAccountId: number;
    spouseId: number;
    spouseName: string;
    spouseLevel: number;
    breed: number;
    sex: number;
    spouseEntityLook: EntityLook;
    guildInfo: BasicGuildInformations;
    alignmentSide: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FriendSpouseInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FriendSpouseInformations(param1: ICustomDataInput): void;
}
export = FriendSpouseInformations;
