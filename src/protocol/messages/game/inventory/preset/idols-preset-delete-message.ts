/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class IdolsPresetDeleteMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6602;

    presetId: number;

    constructor() {
        this.presetId = 0;
        super();
    }

    public getMessageId(): number {
        return IdolsPresetDeleteMessage.ID;
    }

    public reset(): void {
        this.presetId = 0;
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
        this.serializeAs_IdolsPresetDeleteMessage(param1);
    }

    public serializeAs_IdolsPresetDeleteMessage(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolsPresetDeleteMessage(param1);
    }

    public deserializeAs_IdolsPresetDeleteMessage(param1: ICustomDataInput): void {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPresetDeleteMessage.presetId.');
        }

    }
}

export = IdolsPresetDeleteMessage;
