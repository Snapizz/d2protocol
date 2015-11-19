/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractSocialGroupInfos = require('../../social/abstract-social-group-infos');
declare class BasicGuildInformations extends AbstractSocialGroupInfos implements INetworkType {
    static ID: number;
    guildId: number;
    guildName: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_BasicGuildInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_BasicGuildInformations(param1: ICustomDataInput): void;
}
export = BasicGuildInformations;
