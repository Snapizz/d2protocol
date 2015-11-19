/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import FriendInformations = require('./friend-informations');
import BasicGuildInformations = require('../context/roleplay/basic-guild-informations');
import PlayerStatus = require('../character/status/player-status');
declare class FriendOnlineInformations extends FriendInformations implements INetworkType {
    static ID: number;
    playerId: number;
    playerName: string;
    level: number;
    alignmentSide: number;
    breed: number;
    sex: boolean;
    guildInfo: BasicGuildInformations;
    moodSmileyId: number;
    status: PlayerStatus;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FriendOnlineInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FriendOnlineInformations(param1: ICustomDataInput): void;
}
export = FriendOnlineInformations;
