/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildMember = require('../../../types/game/guild/guild-member');
declare class GuildInformationsMembersMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    members: GuildMember[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInformationsMembersMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInformationsMembersMessage(param1: ICustomDataInput): void;
}
export = GuildInformationsMembersMessage;
