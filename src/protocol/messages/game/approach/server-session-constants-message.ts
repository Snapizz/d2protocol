/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ServerSessionConstant = require('../../../types/game/approach/server-session-constant');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class ServerSessionConstantsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6434;

    variables: ServerSessionConstant[];

    constructor() {
        this.variables = [];
        super();
    }

    public getMessageId(): number {
        return ServerSessionConstantsMessage.ID;
    }

    public reset(): void {
        this.variables = [];
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
        this.serializeAs_ServerSessionConstantsMessage(param1);
    }

    public serializeAs_ServerSessionConstantsMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.variables.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.variables.length) {
            param1.writeShort((this.variables[_loc2_]).getTypeId());
            (this.variables[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerSessionConstantsMessage(param1);
    }

    public deserializeAs_ServerSessionConstantsMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: ServerSessionConstant = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <ServerSessionConstant>ProtocolTypeManager.getInstance(ServerSessionConstant, _loc4_);
            _loc5_.deserialize(param1);
            this.variables.push(_loc5_);
            _loc3_++;
        }

    }
}

export = ServerSessionConstantsMessage;
