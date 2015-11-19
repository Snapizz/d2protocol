/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CompassUpdateMessage = require('./compass-update-message');
import MapCoordinates = require('../../../../types/game/context/map-coordinates');

class CompassUpdatePartyMemberMessage extends CompassUpdateMessage {
    public static ID: number = 5589;

    memberId: number;

    constructor() {
        this.memberId = 0;
        super();
    }

    public getMessageId(): number {
        return CompassUpdatePartyMemberMessage.ID;
    }

    public reset(): void {
        this.memberId = 0;
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
        this.serializeAs_CompassUpdatePartyMemberMessage(param1);
    }

    public serializeAs_CompassUpdatePartyMemberMessage(param1: ICustomDataOutput): void {
        super.serializeAs_CompassUpdateMessage(param1);
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CompassUpdatePartyMemberMessage(param1);
    }

    public deserializeAs_CompassUpdatePartyMemberMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of CompassUpdatePartyMemberMessage.memberId.');
        }

    }
}

export = CompassUpdatePartyMemberMessage;
