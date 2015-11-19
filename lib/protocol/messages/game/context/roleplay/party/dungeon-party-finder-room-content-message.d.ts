/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import DungeonPartyFinderPlayer = require('../../../../../types/game/context/roleplay/party/dungeon-party-finder-player');
declare class DungeonPartyFinderRoomContentMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    dungeonId: number;
    players: DungeonPartyFinderPlayer[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_DungeonPartyFinderRoomContentMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_DungeonPartyFinderRoomContentMessage(param1: ICustomDataInput): void;
}
export = DungeonPartyFinderRoomContentMessage;
