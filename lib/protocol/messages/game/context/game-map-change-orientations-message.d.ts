/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ActorOrientation = require('../../../types/game/context/actor-orientation');
declare class GameMapChangeOrientationsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    orientations: ActorOrientation[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameMapChangeOrientationsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameMapChangeOrientationsMessage(param1: ICustomDataInput): void;
}
export = GameMapChangeOrientationsMessage;
