/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeMountsTakenFromPaddockMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6554;

    name: string;
    worldX: number;
    worldY: number;
    ownername: string;

    constructor() {
        this.name = '';
        this.worldX = 0;
        this.worldY = 0;
        this.ownername = '';
        super();
    }

    public getMessageId(): number {
        return ExchangeMountsTakenFromPaddockMessage.ID;
    }

    public reset(): void {
        this.name = '';
        this.worldX = 0;
        this.worldY = 0;
        this.ownername = '';
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
        this.serializeAs_ExchangeMountsTakenFromPaddockMessage(param1);
    }

    public serializeAs_ExchangeMountsTakenFromPaddockMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.name);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeUTF(this.ownername);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeMountsTakenFromPaddockMessage(param1);
    }

    public deserializeAs_ExchangeMountsTakenFromPaddockMessage(param1: ICustomDataInput): void {
        this.name = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of ExchangeMountsTakenFromPaddockMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of ExchangeMountsTakenFromPaddockMessage.worldY.');
        }
        this.ownername = param1.readUTF();

    }
}

export = ExchangeMountsTakenFromPaddockMessage;
