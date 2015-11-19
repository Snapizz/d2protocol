/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import IdolsPreset = require('../../../../types/game/inventory/preset/idols-preset');

class IdolsPresetUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6606;

    idolsPreset: IdolsPreset;

    constructor() {
        this.idolsPreset = new IdolsPreset();
        super();
    }

    public getMessageId(): number {
        return IdolsPresetUpdateMessage.ID;
    }

    public reset(): void {
        this.idolsPreset = new IdolsPreset();
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
        this.serializeAs_IdolsPresetUpdateMessage(param1);
    }

    public serializeAs_IdolsPresetUpdateMessage(param1: ICustomDataOutput): void {
        this.idolsPreset.serializeAs_IdolsPreset(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolsPresetUpdateMessage(param1);
    }

    public deserializeAs_IdolsPresetUpdateMessage(param1: ICustomDataInput): void {
        this.idolsPreset = new IdolsPreset();
        this.idolsPreset.deserialize(param1);

    }
}

export = IdolsPresetUpdateMessage;
