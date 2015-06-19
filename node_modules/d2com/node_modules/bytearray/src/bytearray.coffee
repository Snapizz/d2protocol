###
# a collection of utility methods for Buffer
#
# 这个工具类的设计以实现两个目地
# 1. 读写方法，匹配 Actionscript 的 ByteArray 读写方法
# 2. ActionScript 的默认采用 big endian，这个工具方法，对此进行封装，以是外部不用关心 endian
#
###

module.exports =

  # Reads a UTF-8 string from the byte stream. The string is assumed to be prefixed with an unsigned short indicating the length in bytes.
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readUTF : (buf, offset)->
    return null unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    return null if buf.length <= offset + 2
    len = buf.readUInt16BE(offset)
    #console.log "[readUTF] buf.position:#{buf.position}, buf.length:#{buf.length}, offset:#{offset}, len:#{len} "
    return null if buf.length < len + offset
    offset += 2
    buf.position = offset + len
    return buf.toString 'utf8', offset, offset+len

  # Reads a sequence of UTF-8 bytes specified by the length parameter from the byte stream and returns a string.
  # @param {Buff} buf
  # @param {uint} length, number of bytes to read
  # @param {int} [offset] optional, specify the offset where read should beging
  readUTFBytes : (buf, length, offset)->
    return null unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    return null if buf.length <= offset
    buf.position = offset + length
    #console.log "[bytearray::readUTFBytes] buf:#{buf}, offset:#{offset}"
    return buf.toString('utf8', offset, offset + length)

  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readFixLengthASCII : (buf, offset) ->
    return null unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    return null if buf.length <= offset + 2
    len = buf.readUInt8(offset)
    return null if buf.length < len + offset
    offset += 1
    buf.position = offset + len
    buf.toString 'utf8', offset, offset+len

  # Reads an unsigned 16-bit integer from the byte stream.
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readUnsignedShort : (buf, offset)->
    return 0 unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.position = offset + 2
    return buf.readUInt16BE offset

  # Reads a 16-bit integer from the byte stream.
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readShort : (buf, offset)->
    return 0 unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.position = offset + 2
    buf.readInt16BE offset

  # co-read to actionscript's ByteArray.readUnsignedByte
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readUnsignedByte : (buf, offset)->
    return 0 unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.position = offset + 1
    buf.readUInt8 offset

  # Reads a byte from the byte stream.
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readByte : (buf, offset)->
    return 0 unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.position = offset + 1
    buf.readInt8 offset

  # Reads an unsigned byte from the byte stream.
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readUnsignedInt: (buf, offset)->
    return 0 unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.position = offset + 4
    buf.readUInt32BE offset

  # Reads a signed 32-bit integer from the byte stream.
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readInt: (buf, offset)->
    return 0 unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.position = offset + 4
    buf.readInt32BE offset

  # Reads a signed 32-bit integer from the byte stream.
  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readFloat : (buf, offset)->
    return 0 unless Buffer.isBuffer buf
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.position = offset + 4
    buf.readFloatLE offset
    # TODO:
    #   this is a quick hack, should implement a proper endian swicher
    # ty 2013-10-08



  # @param {Buff} buf
  # @param {int} [offset] optional, specify the offset where read should beging
  readUnsignedIntArray:(buf, offset)->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    len = buf.readUInt16BE(offset) >>> 2 # *4 bytes for an int
    offset += 2
    arr = []
    if len is 0 or len > 1024
      buf.position = offset
      return arr
    while(len > 0)
      a = buf.readUInt32BE(offset)
      arr.push(a)
      offset += 4
      len -= 1
    buf.position = offset
    return arr

  # @param {Buff} buf
  # @param {uint} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeUnsignedInt : (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    #console.log "[msg] buf.length:#{buf.length}, offset:#{offset}"
    buf.writeUInt32BE value, offset
    buf.position = offset + 4
    return

  # @param {Buff} buf
  # @param {int} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeInt : (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.writeInt32BE value, offset
    buf.position = offset + 4
    return


  # @param {Buff} buf
  # @param {int} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeFloat : (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.writeFloatLE value, offset
    # TODO:
    #   this is a quick hack, should implement a proper endian swicher
    # ty 2013-10-08

    buf.position = offset + 4
    return




  # @param {Buff} buf
  # @param {ushort} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeUnsignedShort: (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.writeUInt16BE value, offset
    buf.position = offset + 2
    return

  # @param {Buff} buf
  # @param {short} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeShort: (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.writeInt16BE value, offset
    buf.position = offset + 2
    return

  # @param {Buff} buf
  # @param {ubyte} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeUnsignedByte: (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.writeUInt8 value, offset
    buf.position = offset + 1
    return

  # @param {Buff} buf
  # @param {byte} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeByte: (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.writeInt8 value, offset
    buf.position = offset + 1
    return

  # @param {Buff} buf
  # @param {Boolean} value
  # @param {int} [offset] optional, specify the offset where read should beging
  writeBoolean: (buf, value, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    value = if value then 1 else 0
    buf.writeInt8 value, offset
    buf.position = offset + 1
    return

  # 以 ASCII 方式在定长bytes中写入给定的字符串，并且保持 position 的连续
  # buf : 需要写入的 Buffer 实例
  # str : 需要写入的字符串
  # maxNumOfChar : 最多所写入的字符长度
  # offset : 从自定义的偏移处开始写
  writeFixLengthASCII : (buf, str, maxNumOfChar, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.writeUInt8 maxNumOfChar, offset
    offset += 1 #+1 因为已经写了1byte的ascii 长度
    buf.fill(0x20, offset, offset + maxNumOfChar)  # 整平这个目标buf
    buf.write str, offset, maxNumOfChar, 'ascii'
    buf.position = offset + maxNumOfChar
    return

  # 以 UTF-8 方式在定长bytes中写入给定的字符串，并且保持 position 的连续
  # buf : 需要写入的 Buffer 实例
  # str : 需要写入的字符串
  # maxNumOfChar : 最多所写入的字符长度
  # offset : 从自定义的偏移处开始写
  writeFixLengthUTF: (buf, str, maxNumOfChar, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    maxNumOfChar *= 6 # 给每个 utf-8 char 预留 6 byte 的空间
    buf.writeUInt16BE maxNumOfChar, offset
    offset += 2 # +2 因为已经写了2byte的utf长度
    buf.fill(0x20, offset, offset + maxNumOfChar)  # 整平这个目标buf
    buf.write str, offset, maxNumOfChar, 'utf8'
    buf.position = offset + maxNumOfChar
    return

  # 以 UTF-8 方式在bytes中写入动态长度的字符串，并且保持 position 的连续
  # buf : 需要写入的 Buffer 实例
  # str : 需要写入的字符串
  # offset : 从自定义的偏移处开始写
  writeUTF: (buf, str, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    byteLength = Buffer.byteLength(str)
    buf.writeUInt16BE(byteLength , offset)
    offset += 2 # +2 因为已经写了2byte的utf长度
    buf.write(str, offset)
    buf.position = offset + byteLength
    return

  # 以 UTF-8 方式在bytes中写入动态长度的字符串，并且保持 position 的连续
  # buf : 需要写入的 Buffer 实例
  # str : 需要写入的字符串
  # offset : 从自定义的偏移处开始写
  writeUTFBytes: (buf, str, offset) ->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    buf.write(str, offset)
    buf.position = offset + Buffer.byteLength(str)
    return

  # 以 UTF-8 方式在bytes中写入动态长度的字符串，并且保持 position 的连续
  # buf : 需要写入的 Buffer 实例
  # strArray : 需要写入的字符串数组
  # offset : 从自定义的偏移处开始写
  writeUTFArray:(buf,strArray,offset)->
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    unless strArray? and strArray.length>0
      buf.writeUInt16BE(0 , offset)
      buf.position=offset+2
      return

    buf.writeUInt16BE(strArray.length , offset)
    offset += 2 # +2 因为已经写了2byte的utf长度
    for str in strArray
      byteLength = Buffer.byteLength(str)
      buf.writeUInt16BE(byteLength , offset)
      offset += 2 # +2 因为已经写了2byte的utf长度
      buf.write(str, offset)
      offset += byteLength
    buf.position=offset


  getByteLengthOfUTFArray:(strArray)->
    len=2
    return len unless strArray? and strArray.length>0
    for str in strArray
      len=len+2+Buffer.byteLength(str)
    return len


  # 以int 的方式写入一个数组
  # @param buf : 需要写入的 Buffer 实例
  # @param arr : 需要写入的数组
  # @param offset : 从自定义的偏移处开始写
  # @param fixedLength : 写入数组的给定长度内容
  writeUnsignedIntArray:(buf, arr, fixedLength = -1, offset)->
    arr = arr || [] # make sure argument arr is usable
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    n = arr.length
    if fixedLength > 0 and fixedLength isnt n
      # user require to write a fixed length of the given array
      if fixedLength < n
        arr = arr.slice(0, fixedLength)
        # NOTE 不能用 splice 因为会改变输入的array 的内容 arr.splice(fixedLength - n)
      else
        arr = arr.concat() # make a copy of the given arr
        arr.length = fixedLength
      n = fixedLength

    n = n << 2 # *4 bytes for an int
    buf.writeUInt16BE(n, offset)
    offset += 2

    for i in arr
      buf.writeUInt32BE( parseInt(i,10) || 0 , offset)
      offset += 4

    buf.position = offset
    return

  # 计算出给定的int数组要写入成二进制时所占的byte长度
  # @param {int[]} arr an integer array
  getByteLengthOfIntArray : (arr) ->
    (arr.length << 2) + 2


  # 以 short 的方式写入一个数组
  # @param buf : 需要写入的 Buffer 实例
  # @param arr : 需要写入的数组
  # @param offset : 从自定义的偏移处开始写
  # @param fixedLength : 写入数组的给定长度内容
  writeUnsignedShortArray:(buf, arr, fixedLength = -1, offset)->
    #console.log "[offset 1]:#{offset}"
    arr = arr || [] # make sure argument arr is usable
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    #console.log "[offset 2]:#{offset}"
    n = arr.length
    if fixedLength > 0 and fixedLength isnt n
      # user require to write a fixed length of the given array
      if fixedLength < n
        arr = arr.slice(0, fixedLength)
        # NOTE 不能用 splice 因为会改变输入的array 的内容 arr.splice(fixedLength - n)
      else
        arr = arr.concat() # make a copy of the given arr
        arr.length = fixedLength
      n = fixedLength

    n = n << 1 # * 2 bytes for a short
    #console.log "[offset]:#{offset}"
    buf.writeUInt16BE(n, offset)
    offset += 2

    for i in arr
      buf.writeUInt16BE( parseInt(i, 10) || 0 , offset)
      offset += 2

    buf.position = offset
    return

  # 计算一个 buf 从当前的 position 开始还有多少byte 可以读取
  getBytesAvailable : (buf) ->
    return if buf? then buf.length - (buf.position || 0) else 0

  # 从给定的buf的当前position位置，复制出给定length的byte片段，并且推进buf的position属性
  scrap : (buf, length) ->
    return null unless buf? and length > 0
    offset = (buf.position || 0)
    return null if length + offset > buf.length
    result = new Buffer(length)
    buf.copy(result, 0, offset, offset + length)
    buf.position = offset + length
    return result

  # 复制一个和给定的 buf 完全一样的新buf
  duplicate : (buf) ->
    n = buf.length || 0
    return null if n is 0
    result = new Buffer(n)
    buf.copy result, 0, 0, n
    return result

  # convert an input str to buffer by utf8 encoding, and add byte length by a short at the begine of the buffer
  utfStringToBuf : (str) ->
    str = String(str || '')
    n = Buffer.byteLength(str, 'utf8')
    buf = new Buffer(n+2)
    buf.writeUInt16BE(n,0)
    buf.write(str, 2)
    return buf

  #是buf并且buf length >0
  isAvailableBuf:(buf)->
    return Buffer.isBuffer(buf) and buf.length>0

  # 以int 的方式写入一个数组
  # @param buf : 需要写入的 Buffer 实例
  # @param arr : 需要写入的数组
  # @param offset : 从自定义的偏移处开始写
  # @param fixedLength : 写入数组的给定长度内容
  writeIntArray:(buf, arr, fixedLength = -1, offset)->
    arr = arr || [] # make sure argument arr is usable
    offset = if offset < 0 then buf.length + offset else (if offset is 0 then 0 else offset || buf.position || 0)
    n = arr.length
    if fixedLength > 0 and fixedLength isnt n
      # user require to write a fixed length of the given array
      if fixedLength < n
        arr = arr.slice(0, fixedLength)
        # NOTE 不能用 splice 因为会改变输入的array 的内容 arr.splice(fixedLength - n)
      else
        arr = arr.concat() # make a copy of the given arr
        arr.length = fixedLength
      n = fixedLength

    n = n << 2 # *4 bytes for an int
    buf.writeUInt16BE(n, offset)
    offset += 2

    for i in arr
      buf.writeInt32BE( parseInt(i,10) || 0 , offset)
      offset += 4

    buf.position = offset
    return





