/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import FriendSpouseInformations = require('../../../types/game/friend/friend-spouse-informations');
declare class SpouseInformationsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    spouse: FriendSpouseInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SpouseInformationsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SpouseInformationsMessage(param1: ICustomDataInput): void;
}
export = SpouseInformationsMessage;
