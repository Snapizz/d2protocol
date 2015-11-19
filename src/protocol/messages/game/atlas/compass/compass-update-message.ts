/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MapCoordinates = require('../../../../types/game/context/map-coordinates');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class CompassUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5591;

    type: number;
    coords: MapCoordinates;

    constructor() {
        this.type = 0;
        this.coords = new MapCoordinates();
        super();
    }

    public getMessageId(): number {
        return CompassUpdateMessage.ID;
    }

    public reset(): void {
        this.type = 0;
        this.coords = new MapCoordinates();
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CompassUpdateMessage(param1);
    }

    public serializeAs_CompassUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.type);
        param1.writeShort(this.coords.getTypeId());
        this.coords.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CompassUpdateMessage(param1);
    }

    public deserializeAs_CompassUpdateMessage(param1: ICustomDataInput): void {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of CompassUpdateMessage.type.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        this.coords = <MapCoordinates>ProtocolTypeManager.getInstance(MapCoordinates, _loc2_);
        this.coords.deserialize(param1);

    }
}

export = CompassUpdateMessage;
