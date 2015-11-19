/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ShortcutBarSwapRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6230;

    barType: number;
    firstSlot: number;
    secondSlot: number;

    constructor() {
        this.barType = 0;
        this.firstSlot = 0;
        this.secondSlot = 0;
        super();
    }

    public getMessageId(): number {
        return ShortcutBarSwapRequestMessage.ID;
    }

    public reset(): void {
        this.barType = 0;
        this.firstSlot = 0;
        this.secondSlot = 0;
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
        this.serializeAs_ShortcutBarSwapRequestMessage(param1);
    }

    public serializeAs_ShortcutBarSwapRequestMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.barType);
        if (this.firstSlot < 0 || this.firstSlot > 99) {
            throw new Error('Forbidden value (' + this.firstSlot + ') on element firstSlot.');
        }
        param1.writeByte(this.firstSlot);
        if (this.secondSlot < 0 || this.secondSlot > 99) {
            throw new Error('Forbidden value (' + this.secondSlot + ') on element secondSlot.');
        }
        param1.writeByte(this.secondSlot);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutBarSwapRequestMessage(param1);
    }

    public deserializeAs_ShortcutBarSwapRequestMessage(param1: ICustomDataInput): void {
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarSwapRequestMessage.barType.');
        }
        this.firstSlot = param1.readByte();
        if (this.firstSlot < 0 || this.firstSlot > 99) {
            throw new Error('Forbidden value (' + this.firstSlot + ') on element of ShortcutBarSwapRequestMessage.firstSlot.');
        }
        this.secondSlot = param1.readByte();
        if (this.secondSlot < 0 || this.secondSlot > 99) {
            throw new Error('Forbidden value (' + this.secondSlot + ') on element of ShortcutBarSwapRequestMessage.secondSlot.');
        }

    }
}

export = ShortcutBarSwapRequestMessage;
