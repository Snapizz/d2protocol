/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterSelectionMessage = require('./character-selection-message');

class CharacterFirstSelectionMessage extends CharacterSelectionMessage {
    public static ID: number = 6084;

    doTutorial: boolean;

    constructor() {
        this.doTutorial = false;
        super();
    }

    public getMessageId(): number {
        return CharacterFirstSelectionMessage.ID;
    }

    public reset(): void {
        this.doTutorial = false;
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
        this.serializeAs_CharacterFirstSelectionMessage(param1);
    }

    public serializeAs_CharacterFirstSelectionMessage(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterSelectionMessage(param1);
        param1.writeBoolean(this.doTutorial);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterFirstSelectionMessage(param1);
    }

    public deserializeAs_CharacterFirstSelectionMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.doTutorial = param1.readBoolean();

    }
}

export = CharacterFirstSelectionMessage;
