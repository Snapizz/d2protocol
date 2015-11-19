/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import FriendSpouseInformations = require('./friend-spouse-informations');
declare class FriendSpouseOnlineInformations extends FriendSpouseInformations implements INetworkType {
    static ID: number;
    mapId: number;
    subAreaId: number;
    inFight: boolean;
    followSpouse: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FriendSpouseOnlineInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FriendSpouseOnlineInformations(param1: ICustomDataInput): void;
}
export = FriendSpouseOnlineInformations;
