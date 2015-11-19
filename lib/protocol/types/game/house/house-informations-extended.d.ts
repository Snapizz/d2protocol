/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import HouseInformations = require('./house-informations');
import GuildInformations = require('../context/roleplay/guild-informations');
declare class HouseInformationsExtended extends HouseInformations implements INetworkType {
    static ID: number;
    guildInfo: GuildInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseInformationsExtended(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseInformationsExtended(param1: ICustomDataInput): void;
}
export = HouseInformationsExtended;
