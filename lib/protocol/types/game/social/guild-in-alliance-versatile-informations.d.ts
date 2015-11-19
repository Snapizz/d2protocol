/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildVersatileInformations = require('./guild-versatile-informations');
declare class GuildInAllianceVersatileInformations extends GuildVersatileInformations implements INetworkType {
    static ID: number;
    allianceId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataInput): void;
}
export = GuildInAllianceVersatileInformations;
