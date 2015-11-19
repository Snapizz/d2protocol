/// <reference path="../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import ByteArray = require('ts-bytearray');
import {ICustomDataOutput, ICustomDataInput} from './custom-data-wrapper';

module m {
	export class NetworkMessage {
		public static BIT_RIGHT_SHIFT_LEN_PACKET_ID: number = 2;
		public static writePacket(param1: ICustomDataOutput, param2: number, param3: ByteArray): void {
			var _loc5_: number = 0;
			var _loc6_: number = 0;
			var _loc4_: number = this.computeTypeLen(param3.buffer.byteLength);
			param1.writeShort(this.subComputeStaticHeader(param2, _loc4_));
			switch (_loc4_) {
				case 0:
					return;
				case 1:
					param1.writeByte(param3.buffer.byteLength);
					break;
				case 2:
					param1.writeShort(param3.buffer.byteLength);
					break;
				case 3:
					_loc5_ = param3.buffer.byteLength >> 16 & 255;
					_loc6_ = param3.buffer.byteLength & 65535;
					param1.writeByte(_loc5_);
					param1.writeShort(_loc6_);
					break;
			}
			param1.writeBytes(param3, 0, param3.buffer.byteLength);
		}

		private static computeTypeLen(param1: number): number {
			if (param1 > 65535) {
				return 3;
			}
			if (param1 > 255) {
				return 2;
			}
			if (param1 > 0) {
				return 1;
			}
			return 0;
		}

		private static subComputeStaticHeader(param1: number, param2: number): number {
			return param1 << NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID | param2;
		}
	}
	export interface INetworkMessage {
		pack(param1: ICustomDataOutput): void;
		unpack(param1: ICustomDataInput, param2: number): void;
		getMessageId(): number;
		reset(): void;
	}
}

export = m;
