/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ShortcutBarSwapErrorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6226;

    error: number;

    constructor() {
        this.error = 0;
        super();
    }

    public getMessageId(): number {
        return ShortcutBarSwapErrorMessage.ID;
    }

    public reset(): void {
        this.error = 0;
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
        this.serializeAs_ShortcutBarSwapErrorMessage(param1);
    }

    public serializeAs_ShortcutBarSwapErrorMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.error);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutBarSwapErrorMessage(param1);
    }

    public deserializeAs_ShortcutBarSwapErrorMessage(param1: ICustomDataInput): void {
        this.error = param1.readByte();
        if (this.error < 0) {
            throw new Error('Forbidden value (' + this.error + ') on element of ShortcutBarSwapErrorMessage.error.');
        }

    }
}

export = ShortcutBarSwapErrorMessage;
