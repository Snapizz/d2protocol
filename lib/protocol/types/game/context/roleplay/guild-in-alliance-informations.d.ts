/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GuildInformations = require('./guild-informations');
declare class GuildInAllianceInformations extends GuildInformations implements INetworkType {
    static ID: number;
    guildLevel: number;
    nbMembers: number;
    enabled: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInAllianceInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInAllianceInformations(param1: ICustomDataInput): void;
}
export = GuildInAllianceInformations;
