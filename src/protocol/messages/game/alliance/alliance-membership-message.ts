/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceJoinedMessage = require('./alliance-joined-message');
import AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations');

class AllianceMembershipMessage extends AllianceJoinedMessage {
    public static ID: number = 6390;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return AllianceMembershipMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_AllianceMembershipMessage(param1);
    }

    public serializeAs_AllianceMembershipMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AllianceJoinedMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceMembershipMessage(param1);
    }

    public deserializeAs_AllianceMembershipMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = AllianceMembershipMessage;
