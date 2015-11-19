/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameActionFightDispellMessage = require('./game-action-fight-dispell-message');

class GameActionFightDispellEffectMessage extends GameActionFightDispellMessage {
    public static ID: number = 6113;

    boostUID: number;

    constructor() {
        this.boostUID = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightDispellEffectMessage.ID;
    }

    public reset(): void {
        this.boostUID = 0;
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
        this.serializeAs_GameActionFightDispellEffectMessage(param1);
    }

    public serializeAs_GameActionFightDispellEffectMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameActionFightDispellMessage(param1);
        if (this.boostUID < 0) {
            throw new Error('Forbidden value (' + this.boostUID + ') on element boostUID.');
        }
        param1.writeInt(this.boostUID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightDispellEffectMessage(param1);
    }

    public deserializeAs_GameActionFightDispellEffectMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.boostUID = param1.readInt();
        if (this.boostUID < 0) {
            throw new Error('Forbidden value (' + this.boostUID + ') on element of GameActionFightDispellEffectMessage.boostUID.');
        }

    }
}

export = GameActionFightDispellEffectMessage;
