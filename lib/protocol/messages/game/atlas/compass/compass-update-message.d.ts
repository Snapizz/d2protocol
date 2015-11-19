/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MapCoordinates = require('../../../../types/game/context/map-coordinates');
declare class CompassUpdateMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    type: number;
    coords: MapCoordinates;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CompassUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CompassUpdateMessage(param1: ICustomDataInput): void;
}
export = CompassUpdateMessage;
