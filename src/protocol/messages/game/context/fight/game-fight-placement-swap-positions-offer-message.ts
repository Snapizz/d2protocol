/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightPlacementSwapPositionsOfferMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6542;

    requestId: number;
    requesterId: number;
    requesterCellId: number;
    requestedId: number;
    requestedCellId: number;

    constructor() {
        this.requestId = 0;
        this.requesterId = 0;
        this.requesterCellId = 0;
        this.requestedId = 0;
        this.requestedCellId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightPlacementSwapPositionsOfferMessage.ID;
    }

    public reset(): void {
        this.requestId = 0;
        this.requesterId = 0;
        this.requesterCellId = 0;
        this.requestedId = 0;
        this.requestedCellId = 0;
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
        this.serializeAs_GameFightPlacementSwapPositionsOfferMessage(param1);
    }

    public serializeAs_GameFightPlacementSwapPositionsOfferMessage(param1: ICustomDataOutput): void {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeInt(this.requestId);
        if (this.requesterId < 0) {
            throw new Error('Forbidden value (' + this.requesterId + ') on element requesterId.');
        }
        param1.writeVarInt(this.requesterId);
        if (this.requesterCellId < 0 || this.requesterCellId > 559) {
            throw new Error('Forbidden value (' + this.requesterCellId + ') on element requesterCellId.');
        }
        param1.writeVarShort(this.requesterCellId);
        if (this.requestedId < 0) {
            throw new Error('Forbidden value (' + this.requestedId + ') on element requestedId.');
        }
        param1.writeVarInt(this.requestedId);
        if (this.requestedCellId < 0 || this.requestedCellId > 559) {
            throw new Error('Forbidden value (' + this.requestedCellId + ') on element requestedCellId.');
        }
        param1.writeVarShort(this.requestedCellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightPlacementSwapPositionsOfferMessage(param1);
    }

    public deserializeAs_GameFightPlacementSwapPositionsOfferMessage(param1: ICustomDataInput): void {
        this.requestId = param1.readInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requestId.');
        }
        this.requesterId = param1.readVarUhInt();
        if (this.requesterId < 0) {
            throw new Error('Forbidden value (' + this.requesterId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requesterId.');
        }
        this.requesterCellId = param1.readVarUhShort();
        if (this.requesterCellId < 0 || this.requesterCellId > 559) {
            throw new Error('Forbidden value (' + this.requesterCellId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requesterCellId.');
        }
        this.requestedId = param1.readVarUhInt();
        if (this.requestedId < 0) {
            throw new Error('Forbidden value (' + this.requestedId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requestedId.');
        }
        this.requestedCellId = param1.readVarUhShort();
        if (this.requestedCellId < 0 || this.requestedCellId > 559) {
            throw new Error('Forbidden value (' + this.requestedCellId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requestedCellId.');
        }

    }
}

export = GameFightPlacementSwapPositionsOfferMessage;
