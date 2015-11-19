/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AbstractContactInformations = require('./abstract-contact-informations');
declare class FriendInformations extends AbstractContactInformations implements INetworkType {
    static ID: number;
    playerState: number;
    lastConnection: number;
    achievementPoints: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FriendInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FriendInformations(param1: ICustomDataInput): void;
}
export = FriendInformations;
