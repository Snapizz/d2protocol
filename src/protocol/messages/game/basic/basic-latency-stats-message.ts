/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicLatencyStatsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5663;

    latency: number;
    sampleCount: number;
    max: number;

    constructor() {
        this.latency = 0;
        this.sampleCount = 0;
        this.max = 0;
        super();
    }

    public getMessageId(): number {
        return BasicLatencyStatsMessage.ID;
    }

    public reset(): void {
        this.latency = 0;
        this.sampleCount = 0;
        this.max = 0;
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
        this.serializeAs_BasicLatencyStatsMessage(param1);
    }

    public serializeAs_BasicLatencyStatsMessage(param1: ICustomDataOutput): void {
        if (this.latency < 0 || this.latency > 65535) {
            throw new Error('Forbidden value (' + this.latency + ') on element latency.');
        }
        param1.writeShort(this.latency);
        if (this.sampleCount < 0) {
            throw new Error('Forbidden value (' + this.sampleCount + ') on element sampleCount.');
        }
        param1.writeVarShort(this.sampleCount);
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element max.');
        }
        param1.writeVarShort(this.max);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicLatencyStatsMessage(param1);
    }

    public deserializeAs_BasicLatencyStatsMessage(param1: ICustomDataInput): void {
        this.latency = param1.readUnsignedShort();
        if (this.latency < 0 || this.latency > 65535) {
            throw new Error('Forbidden value (' + this.latency + ') on element of BasicLatencyStatsMessage.latency.');
        }
        this.sampleCount = param1.readVarUhShort();
        if (this.sampleCount < 0) {
            throw new Error('Forbidden value (' + this.sampleCount + ') on element of BasicLatencyStatsMessage.sampleCount.');
        }
        this.max = param1.readVarUhShort();
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element of BasicLatencyStatsMessage.max.');
        }

    }
}

export = BasicLatencyStatsMessage;
