/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MapObstacle = require('../../../../types/game/interactive/map-obstacle');
declare class MapObstacleUpdateMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    obstacles: MapObstacle[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapObstacleUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapObstacleUpdateMessage(param1: ICustomDataInput): void;
}
export = MapObstacleUpdateMessage;
