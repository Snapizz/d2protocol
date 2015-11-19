/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import CharacterMinimalInformations = require('../character/character-minimal-informations');
import PlayerStatus = require('../character/status/player-status');
declare class GuildMember extends CharacterMinimalInformations implements INetworkType {
    static ID: number;
    breed: number;
    sex: boolean;
    rank: number;
    givenExperience: number;
    experienceGivenPercent: number;
    rights: number;
    connected: number;
    alignmentSide: number;
    hoursSinceLastConnection: number;
    moodSmileyId: number;
    accountId: number;
    achievementPoints: number;
    status: PlayerStatus;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildMember(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildMember(param1: ICustomDataInput): void;
}
export = GuildMember;
