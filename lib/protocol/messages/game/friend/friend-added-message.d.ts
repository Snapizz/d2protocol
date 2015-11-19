/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import FriendInformations = require('../../../types/game/friend/friend-informations');
declare class FriendAddedMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    friendAdded: FriendInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FriendAddedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FriendAddedMessage(param1: ICustomDataInput): void;
}
export = FriendAddedMessage;
