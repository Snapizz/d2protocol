/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PaddockAbandonnedInformations = require('./paddock-abandonned-informations');
import GuildInformations = require('../context/roleplay/guild-informations');
declare class PaddockPrivateInformations extends PaddockAbandonnedInformations implements INetworkType {
    static ID: number;
    guildInfo: GuildInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockPrivateInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockPrivateInformations(param1: ICustomDataInput): void;
}
export = PaddockPrivateInformations;
