/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import FriendSpouseInformations = require('../../../types/game/friend/friend-spouse-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class SpouseInformationsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6356;

    spouse: FriendSpouseInformations;

    constructor() {
        this.spouse = new FriendSpouseInformations();
        super();
    }

    public getMessageId(): number {
        return SpouseInformationsMessage.ID;
    }

    public reset(): void {
        this.spouse = new FriendSpouseInformations();
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
        this.serializeAs_SpouseInformationsMessage(param1);
    }

    public serializeAs_SpouseInformationsMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.spouse.getTypeId());
        this.spouse.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SpouseInformationsMessage(param1);
    }

    public deserializeAs_SpouseInformationsMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.spouse = <FriendSpouseInformations>ProtocolTypeManager.getInstance(FriendSpouseInformations, _loc2_);
        this.spouse.deserialize(param1);

    }
}

export = SpouseInformationsMessage;
