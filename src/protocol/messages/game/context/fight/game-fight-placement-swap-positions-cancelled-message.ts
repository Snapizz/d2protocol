/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightPlacementSwapPositionsCancelledMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6546;

    requestId: number;
    cancellerId: number;

    constructor() {
        this.requestId = 0;
        this.cancellerId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightPlacementSwapPositionsCancelledMessage.ID;
    }

    public reset(): void {
        this.requestId = 0;
        this.cancellerId = 0;
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
        this.serializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1);
    }

    public serializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1: ICustomDataOutput): void {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeInt(this.requestId);
        if (this.cancellerId < 0) {
            throw new Error('Forbidden value (' + this.cancellerId + ') on element cancellerId.');
        }
        param1.writeVarInt(this.cancellerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1);
    }

    public deserializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1: ICustomDataInput): void {
        this.requestId = param1.readInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of GameFightPlacementSwapPositionsCancelledMessage.requestId.');
        }
        this.cancellerId = param1.readVarUhInt();
        if (this.cancellerId < 0) {
            throw new Error('Forbidden value (' + this.cancellerId + ') on element of GameFightPlacementSwapPositionsCancelledMessage.cancellerId.');
        }

    }
}

export = GameFightPlacementSwapPositionsCancelledMessage;
