/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildInformations = require('./roleplay/guild-informations');
declare class TaxCollectorStaticInformations implements INetworkType {
    static ID: number;
    firstNameId: number;
    lastNameId: number;
    guildIdentity: GuildInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorStaticInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorStaticInformations(param1: ICustomDataInput): void;
}
export = TaxCollectorStaticInformations;
