/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightOptionToggleMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 707;

    option: number;

    constructor() {
        this.option = 3;
        super();
    }

    public getMessageId(): number {
        return GameFightOptionToggleMessage.ID;
    }

    public reset(): void {
        this.option = 3;
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
        this.serializeAs_GameFightOptionToggleMessage(param1);
    }

    public serializeAs_GameFightOptionToggleMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.option);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightOptionToggleMessage(param1);
    }

    public deserializeAs_GameFightOptionToggleMessage(param1: ICustomDataInput): void {
        this.option = param1.readByte();
        if (this.option < 0) {
            throw new Error('Forbidden value (' + this.option + ') on element of GameFightOptionToggleMessage.option.');
        }

    }
}

export = GameFightOptionToggleMessage;
