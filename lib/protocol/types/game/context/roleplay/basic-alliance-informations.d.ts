/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractSocialGroupInfos = require('../../social/abstract-social-group-infos');
declare class BasicAllianceInformations extends AbstractSocialGroupInfos implements INetworkType {
    static ID: number;
    allianceId: number;
    allianceTag: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_BasicAllianceInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_BasicAllianceInformations(param1: ICustomDataInput): void;
}
export = BasicAllianceInformations;
