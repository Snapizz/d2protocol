/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightLeaveMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 721;

    charId: number;

    constructor() {
        this.charId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightLeaveMessage.ID;
    }

    public reset(): void {
        this.charId = 0;
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
        this.serializeAs_GameFightLeaveMessage(param1);
    }

    public serializeAs_GameFightLeaveMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.charId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightLeaveMessage(param1);
    }

    public deserializeAs_GameFightLeaveMessage(param1: ICustomDataInput): void {
        this.charId = param1.readInt();

    }
}

export = GameFightLeaveMessage;
