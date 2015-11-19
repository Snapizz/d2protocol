/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class KamasUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5537;

    kamasTotal: number;

    constructor() {
        this.kamasTotal = 0;
        super();
    }

    public getMessageId(): number {
        return KamasUpdateMessage.ID;
    }

    public reset(): void {
        this.kamasTotal = 0;
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
        this.serializeAs_KamasUpdateMessage(param1);
    }

    public serializeAs_KamasUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeVarInt(this.kamasTotal);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_KamasUpdateMessage(param1);
    }

    public deserializeAs_KamasUpdateMessage(param1: ICustomDataInput): void {
        this.kamasTotal = param1.readVarInt();

    }
}

export = KamasUpdateMessage;
