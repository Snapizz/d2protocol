/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GameContextReadyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6071;

    mapId: number;

    constructor() {
        this.mapId = 0;
        super();
    }

    public getMessageId(): number {
        return GameContextReadyMessage.ID;
    }

    public reset(): void {
        this.mapId = 0;
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
        this.serializeAs_GameContextReadyMessage(param1);
    }

    public serializeAs_GameContextReadyMessage(param1: ICustomDataOutput): void {
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameContextReadyMessage(param1);
    }

    public deserializeAs_GameContextReadyMessage(param1: ICustomDataInput): void {
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of GameContextReadyMessage.mapId.');
        }

    }
}

export = GameContextReadyMessage;
