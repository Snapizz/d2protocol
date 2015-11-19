/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightTurnReadyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 716;

    isReady: boolean;

    constructor() {
        this.isReady = false;
        super();
    }

    public getMessageId(): number {
        return GameFightTurnReadyMessage.ID;
    }

    public reset(): void {
        this.isReady = false;
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
        this.serializeAs_GameFightTurnReadyMessage(param1);
    }

    public serializeAs_GameFightTurnReadyMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.isReady);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightTurnReadyMessage(param1);
    }

    public deserializeAs_GameFightTurnReadyMessage(param1: ICustomDataInput): void {
        this.isReady = param1.readBoolean();

    }
}

export = GameFightTurnReadyMessage;
