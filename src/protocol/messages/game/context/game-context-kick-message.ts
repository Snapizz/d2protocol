/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GameContextKickMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6081;

    targetId: number;

    constructor() {
        this.targetId = 0;
        super();
    }

    public getMessageId(): number {
        return GameContextKickMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
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
        this.serializeAs_GameContextKickMessage(param1);
    }

    public serializeAs_GameContextKickMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.targetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameContextKickMessage(param1);
    }

    public deserializeAs_GameContextKickMessage(param1: ICustomDataInput): void {
        this.targetId = param1.readInt();

    }
}

export = GameContextKickMessage;
