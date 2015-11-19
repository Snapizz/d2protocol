/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import BasicNamedAllianceInformations = require('./basic-named-alliance-informations');
import GuildEmblem = require('../../guild/guild-emblem');
declare class AllianceInformations extends BasicNamedAllianceInformations implements INetworkType {
    static ID: number;
    allianceEmblem: GuildEmblem;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceInformations(param1: ICustomDataInput): void;
}
export = AllianceInformations;
