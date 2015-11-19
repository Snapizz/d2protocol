/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightSpectatePlayerRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6474;

    playerId: number;

    constructor() {
        this.playerId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightSpectatePlayerRequestMessage.ID;
    }

    public reset(): void {
        this.playerId = 0;
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
        this.serializeAs_GameFightSpectatePlayerRequestMessage(param1);
    }

    public serializeAs_GameFightSpectatePlayerRequestMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.playerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightSpectatePlayerRequestMessage(param1);
    }

    public deserializeAs_GameFightSpectatePlayerRequestMessage(param1: ICustomDataInput): void {
        this.playerId = param1.readInt();

    }
}

export = GameFightSpectatePlayerRequestMessage;
