/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightActivateGlyphTrapMessage extends AbstractGameActionMessage {
    public static ID: number = 6545;

    markId: number;
    active: boolean;

    constructor() {
        this.markId = 0;
        this.active = false;
        super();
    }

    public getMessageId(): number {
        return GameActionFightActivateGlyphTrapMessage.ID;
    }

    public reset(): void {
        this.markId = 0;
        this.active = false;
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
        this.serializeAs_GameActionFightActivateGlyphTrapMessage(param1);
    }

    public serializeAs_GameActionFightActivateGlyphTrapMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeShort(this.markId);
        param1.writeBoolean(this.active);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightActivateGlyphTrapMessage(param1);
    }

    public deserializeAs_GameActionFightActivateGlyphTrapMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.markId = param1.readShort();
        this.active = param1.readBoolean();

    }
}

export = GameActionFightActivateGlyphTrapMessage;
