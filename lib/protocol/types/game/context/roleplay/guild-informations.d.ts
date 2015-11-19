/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import BasicGuildInformations = require('./basic-guild-informations');
import GuildEmblem = require('../../guild/guild-emblem');
declare class GuildInformations extends BasicGuildInformations implements INetworkType {
    static ID: number;
    guildEmblem: GuildEmblem;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInformations(param1: ICustomDataInput): void;
}
export = GuildInformations;
