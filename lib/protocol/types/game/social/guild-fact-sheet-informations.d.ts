/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildInformations = require('../context/roleplay/guild-informations');
declare class GuildFactSheetInformations extends GuildInformations implements INetworkType {
    static ID: number;
    leaderId: number;
    guildLevel: number;
    nbMembers: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildFactSheetInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildFactSheetInformations(param1: ICustomDataInput): void;
}
export = GuildFactSheetInformations;
