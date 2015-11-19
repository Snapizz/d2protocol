/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import IgnoredInformations = require('../../../types/game/friend/ignored-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class IgnoredAddedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5678;

    ignoreAdded: IgnoredInformations;
    session: boolean;

    constructor() {
        this.ignoreAdded = new IgnoredInformations();
        this.session = false;
        super();
    }

    public getMessageId(): number {
        return IgnoredAddedMessage.ID;
    }

    public reset(): void {
        this.ignoreAdded = new IgnoredInformations();
        this.session = false;
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
        this.serializeAs_IgnoredAddedMessage(param1);
    }

    public serializeAs_IgnoredAddedMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.ignoreAdded.getTypeId());
        this.ignoreAdded.serialize(param1);
        param1.writeBoolean(this.session);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IgnoredAddedMessage(param1);
    }

    public deserializeAs_IgnoredAddedMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.ignoreAdded = <IgnoredInformations>ProtocolTypeManager.getInstance(IgnoredInformations, _loc2_);
        this.ignoreAdded.deserialize(param1);
        this.session = param1.readBoolean();

    }
}

export = IgnoredAddedMessage;
