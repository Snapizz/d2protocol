/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightJoinRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 701;

    fighterId: number;
    fightId: number;

    constructor() {
        this.fighterId = 0;
        this.fightId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightJoinRequestMessage.ID;
    }

    public reset(): void {
        this.fighterId = 0;
        this.fightId = 0;
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
        this.serializeAs_GameFightJoinRequestMessage(param1);
    }

    public serializeAs_GameFightJoinRequestMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.fighterId);
        param1.writeInt(this.fightId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightJoinRequestMessage(param1);
    }

    public deserializeAs_GameFightJoinRequestMessage(param1: ICustomDataInput): void {
        this.fighterId = param1.readInt();
        this.fightId = param1.readInt();

    }
}

export = GameFightJoinRequestMessage;
