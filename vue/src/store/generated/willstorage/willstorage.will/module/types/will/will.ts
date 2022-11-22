/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "willstorage.will";

export interface Will {
  id: number;
  testatorname: string;
  testatorid: string;
  beneficiaries: string;
  assets: string;
  executorname: string;
  executorid: string;
  datecreated: string;
  timecreated: string;
  dateexecuted: string;
  timeexecuted: string;
  status: string;
}

const baseWill: object = {
  id: 0,
  testatorname: "",
  testatorid: "",
  beneficiaries: "",
  assets: "",
  executorname: "",
  executorid: "",
  datecreated: "",
  timecreated: "",
  dateexecuted: "",
  timeexecuted: "",
  status: "",
};

export const Will = {
  encode(message: Will, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.testatorname !== "") {
      writer.uint32(18).string(message.testatorname);
    }
    if (message.testatorid !== "") {
      writer.uint32(26).string(message.testatorid);
    }
    if (message.beneficiaries !== "") {
      writer.uint32(34).string(message.beneficiaries);
    }
    if (message.assets !== "") {
      writer.uint32(42).string(message.assets);
    }
    if (message.executorname !== "") {
      writer.uint32(50).string(message.executorname);
    }
    if (message.executorid !== "") {
      writer.uint32(58).string(message.executorid);
    }
    if (message.datecreated !== "") {
      writer.uint32(66).string(message.datecreated);
    }
    if (message.timecreated !== "") {
      writer.uint32(74).string(message.timecreated);
    }
    if (message.dateexecuted !== "") {
      writer.uint32(82).string(message.dateexecuted);
    }
    if (message.timeexecuted !== "") {
      writer.uint32(90).string(message.timeexecuted);
    }
    if (message.status !== "") {
      writer.uint32(98).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Will {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWill } as Will;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.testatorname = reader.string();
          break;
        case 3:
          message.testatorid = reader.string();
          break;
        case 4:
          message.beneficiaries = reader.string();
          break;
        case 5:
          message.assets = reader.string();
          break;
        case 6:
          message.executorname = reader.string();
          break;
        case 7:
          message.executorid = reader.string();
          break;
        case 8:
          message.datecreated = reader.string();
          break;
        case 9:
          message.timecreated = reader.string();
          break;
        case 10:
          message.dateexecuted = reader.string();
          break;
        case 11:
          message.timeexecuted = reader.string();
          break;
        case 12:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Will {
    const message = { ...baseWill } as Will;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.testatorname !== undefined && object.testatorname !== null) {
      message.testatorname = String(object.testatorname);
    } else {
      message.testatorname = "";
    }
    if (object.testatorid !== undefined && object.testatorid !== null) {
      message.testatorid = String(object.testatorid);
    } else {
      message.testatorid = "";
    }
    if (object.beneficiaries !== undefined && object.beneficiaries !== null) {
      message.beneficiaries = String(object.beneficiaries);
    } else {
      message.beneficiaries = "";
    }
    if (object.assets !== undefined && object.assets !== null) {
      message.assets = String(object.assets);
    } else {
      message.assets = "";
    }
    if (object.executorname !== undefined && object.executorname !== null) {
      message.executorname = String(object.executorname);
    } else {
      message.executorname = "";
    }
    if (object.executorid !== undefined && object.executorid !== null) {
      message.executorid = String(object.executorid);
    } else {
      message.executorid = "";
    }
    if (object.datecreated !== undefined && object.datecreated !== null) {
      message.datecreated = String(object.datecreated);
    } else {
      message.datecreated = "";
    }
    if (object.timecreated !== undefined && object.timecreated !== null) {
      message.timecreated = String(object.timecreated);
    } else {
      message.timecreated = "";
    }
    if (object.dateexecuted !== undefined && object.dateexecuted !== null) {
      message.dateexecuted = String(object.dateexecuted);
    } else {
      message.dateexecuted = "";
    }
    if (object.timeexecuted !== undefined && object.timeexecuted !== null) {
      message.timeexecuted = String(object.timeexecuted);
    } else {
      message.timeexecuted = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: Will): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.testatorname !== undefined &&
      (obj.testatorname = message.testatorname);
    message.testatorid !== undefined && (obj.testatorid = message.testatorid);
    message.beneficiaries !== undefined &&
      (obj.beneficiaries = message.beneficiaries);
    message.assets !== undefined && (obj.assets = message.assets);
    message.executorname !== undefined &&
      (obj.executorname = message.executorname);
    message.executorid !== undefined && (obj.executorid = message.executorid);
    message.datecreated !== undefined &&
      (obj.datecreated = message.datecreated);
    message.timecreated !== undefined &&
      (obj.timecreated = message.timecreated);
    message.dateexecuted !== undefined &&
      (obj.dateexecuted = message.dateexecuted);
    message.timeexecuted !== undefined &&
      (obj.timeexecuted = message.timeexecuted);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<Will>): Will {
    const message = { ...baseWill } as Will;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.testatorname !== undefined && object.testatorname !== null) {
      message.testatorname = object.testatorname;
    } else {
      message.testatorname = "";
    }
    if (object.testatorid !== undefined && object.testatorid !== null) {
      message.testatorid = object.testatorid;
    } else {
      message.testatorid = "";
    }
    if (object.beneficiaries !== undefined && object.beneficiaries !== null) {
      message.beneficiaries = object.beneficiaries;
    } else {
      message.beneficiaries = "";
    }
    if (object.assets !== undefined && object.assets !== null) {
      message.assets = object.assets;
    } else {
      message.assets = "";
    }
    if (object.executorname !== undefined && object.executorname !== null) {
      message.executorname = object.executorname;
    } else {
      message.executorname = "";
    }
    if (object.executorid !== undefined && object.executorid !== null) {
      message.executorid = object.executorid;
    } else {
      message.executorid = "";
    }
    if (object.datecreated !== undefined && object.datecreated !== null) {
      message.datecreated = object.datecreated;
    } else {
      message.datecreated = "";
    }
    if (object.timecreated !== undefined && object.timecreated !== null) {
      message.timecreated = object.timecreated;
    } else {
      message.timecreated = "";
    }
    if (object.dateexecuted !== undefined && object.dateexecuted !== null) {
      message.dateexecuted = object.dateexecuted;
    } else {
      message.dateexecuted = "";
    }
    if (object.timeexecuted !== undefined && object.timeexecuted !== null) {
      message.timeexecuted = object.timeexecuted;
    } else {
      message.timeexecuted = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
