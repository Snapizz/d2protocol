/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class NicknameChoiceRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5639;

    nickname: string;

    constructor() {
        this.nickname = '';
        super();
    }

    public getMessageId(): number {
        return NicknameChoiceRequestMessage.ID;
    }

    public reset(): void {
        this.nickname = '';
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
        this.serializeAs_NicknameChoiceRequestMessage(param1);
    }

    public serializeAs_NicknameChoiceRequestMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.nickname);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NicknameChoiceRequestMessage(param1);
    }

    public deserializeAs_NicknameChoiceRequestMessage(param1: ICustomDataInput): void {
        this.nickname = param1.readUTF();

    }
}

export = NicknameChoiceRequestMessage;
