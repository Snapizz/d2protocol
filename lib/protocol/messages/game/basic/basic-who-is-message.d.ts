/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AbstractSocialGroupInfos = require('../../../types/game/social/abstract-social-group-infos');
declare class BasicWhoIsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    self: boolean;
    position: number;
    accountNickname: string;
    accountId: number;
    playerName: string;
    playerId: number;
    areaId: number;
    socialGroups: AbstractSocialGroupInfos[];
    verbose: boolean;
    playerState: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_BasicWhoIsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_BasicWhoIsMessage(param1: ICustomDataInput): void;
}
export = BasicWhoIsMessage;
