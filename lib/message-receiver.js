var glob = require( 'glob' ),
    Q = require( 'q' ),
    NetworkMessage = require('d2com').NetworkMessage,
    CustomDataWrapper = require('d2com').CustomDataWrapper,
    path = require( 'path' );

var MessageReceiver = function () {
  var messages = this.messages = {};
  var files = glob.sync(path.join(__dirname, 'messages/**/*.js'));
  files.forEach(function (file) {
    var message = require(file);
    messages[message.id] = message;
  });
}

module.exports = function () {
  return new MessageReceiver();
};

module.exports.MessageReceiver = MessageReceiver;

MessageReceiver.prototype.get = function (messageId) {
  if(!this.messages){
    throw new Error('Not initialized');
  }
  var Message = this.messages[messageId];
  if(!Message)
  {
    throw new Error('Unknown message (ID ' + messageId + ')');
  }

  return Message();
}

MessageReceiver.prototype.parse = function parse(input, messageId, messageLength) {
  if(!this.messages){
    throw new Error('Not initialized');
  }

  if(!messageId){
    return this.parseHeader(input);
  }
  
  var message = this.get(messageId);
  message.unpack(input, messageLength);

  return message;
};

MessageReceiver.prototype.parseHeader = function (src, splittedPacket, staticHeader, messageId, messageLength, buf) {

  if(!splittedPacket){
    if(src.bytesAvailable < 2){
      throw new Error('Not enought data to read the header, byte available : ' + src.bytesAvailable + ' (needed : 2)');
    }
    buf = new Buffer(32)
    staticHeader = src.readUnsignedShort();
    messageId = getMessageId(staticHeader);
    if(src.bytesAvailable < (staticHeader & NetworkMessage.BIT_MASK)){
      conosle.error('Not enought data to read message ID, byte available : ' + src.bytesAvailable + ' (needed : )' + (staticHeader & NetworkMessage.BIT_MASK));
      return this.parseHeader(src, true, staticHeader, messageId, messageLength);
    }
    messageLength = readMessageLength(staticHeader, src);
    if(src.bytesAvailable < messageLength){
      conosle.error('Not enought data to read message content, byte available : ' + src.bytesAvailable + ' (needed : )' + (messageLength));
      return this.parseHeader(src, true, staticHeader, messageId, messageLength);
    }
    return this.parse(src, messageId, messageLength);
  } 

  if(staticHeader && staticHeader !== -1){
    messageLength = readMessageLength(staticHeader, src);
    staticHeader = -1;
  }

  if ((src.bytesAvailable + buf.length) >= messageLength)
  {
    src.readBytes(buf, buf.length, (messageLength - buf.length));
    buf.position = 0;
    return this.parse(new CustomDataWrapper(buf), messageId, messageLength);
  };
  src.readBytes(buf, buf.length, src.bytesAvailable);

  return null;
}

function getMessageId(firstOctet)
{
  return ((firstOctet >> NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID));
}

function readMessageLength(staticHeader, src)
{
  var byteLenDynamicHeader = (staticHeader & NetworkMessage.BIT_MASK);
  var messageLength;
  switch (byteLenDynamicHeader)
  {
    case 0:
      break;
    case 1:
      messageLength = src.readUnsignedByte();
      break;
    case 2:
      messageLength = src.readUnsignedShort();
      break;
    case 3:
      messageLength = ((((src.readByte() & 0xFF) << 16) + ((src.readByte() & 0xFF) << 8)) + (src.readByte() & 0xFF));
      break;
  };
  return (messageLength);
}