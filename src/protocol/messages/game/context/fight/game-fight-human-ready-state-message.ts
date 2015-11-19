/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightHumanReadyStateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 740;

    characterId: number;
    isReady: boolean;

    constructor() {
        this.characterId = 0;
        this.isReady = false;
        super();
    }

    public getMessageId(): number {
        return GameFightHumanReadyStateMessage.ID;
    }

    public reset(): void {
        this.characterId = 0;
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
        this.serializeAs_GameFightHumanReadyStateMessage(param1);
    }

    public serializeAs_GameFightHumanReadyStateMessage(param1: ICustomDataOutput): void {
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeVarInt(this.characterId);
        param1.writeBoolean(this.isReady);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightHumanReadyStateMessage(param1);
    }

    public deserializeAs_GameFightHumanReadyStateMessage(param1: ICustomDataInput): void {
        this.characterId = param1.readVarUhInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of GameFightHumanReadyStateMessage.characterId.');
        }
        this.isReady = param1.readBoolean();

    }
}

export = GameFightHumanReadyStateMessage;
