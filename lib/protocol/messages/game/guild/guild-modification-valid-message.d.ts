/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildEmblem = require('../../../types/game/guild/guild-emblem');
declare class GuildModificationValidMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    guildName: string;
    guildEmblem: GuildEmblem;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildModificationValidMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildModificationValidMessage(param1: ICustomDataInput): void;
}
export = GuildModificationValidMessage;
