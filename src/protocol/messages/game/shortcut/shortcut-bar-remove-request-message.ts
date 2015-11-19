/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ShortcutBarRemoveRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6228;

    barType: number;
    slot: number;

    constructor() {
        this.barType = 0;
        this.slot = 0;
        super();
    }

    public getMessageId(): number {
        return ShortcutBarRemoveRequestMessage.ID;
    }

    public reset(): void {
        this.barType = 0;
        this.slot = 0;
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
        this.serializeAs_ShortcutBarRemoveRequestMessage(param1);
    }

    public serializeAs_ShortcutBarRemoveRequestMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.barType);
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element slot.');
        }
        param1.writeByte(this.slot);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutBarRemoveRequestMessage(param1);
    }

    public deserializeAs_ShortcutBarRemoveRequestMessage(param1: ICustomDataInput): void {
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarRemoveRequestMessage.barType.');
        }
        this.slot = param1.readByte();
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element of ShortcutBarRemoveRequestMessage.slot.');
        }

    }
}

export = ShortcutBarRemoveRequestMessage;
