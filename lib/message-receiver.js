var glob = require( 'glob' ),
    Q = require( 'q' ),
    NetworkMessage = require('d2com').networkMessage,
    CustomDataWrapper = require('d2com').customDataWrapper,
    path = require( 'path' );

var self;

var MessageReceiver = function () {
  self = this;
  this.messages = {};
}

module.exports = {
  class: MessageReceiver,
  instance: new MessageReceiver()
};

MessageReceiver.prototype.parse = function parse(input, messageId, messageLength) {
  if(!self.messages){
    throw new Error('Not initialized');
  }

  if(!messageId){
    return parseHeader(input);
  }
  
  var Message = self.messages[messageId];
  if (!Message)
  {
    throw new Error('Unknown packet received (ID ' + messageId + ', length ' + messageLength + ')');
  }
  
  var message = new (Message.class)();
    message.unpack(input, messageLength);

  return message;
};

function parseHeader (src, splittedPacket, staticHeader, messageId, messageLength, buf) {

  if(!splittedPacket){
    if(src.bytesAvailable < 2){
      throw new Error('Not enought data to read the header, byte available : ' + src.bytesAvailable + ' (needed : 2)');
    }
    buf = new Buffer(32)
    staticHeader = src.readUnsignedShort();
    messageId = getMessageId(staticHeader);
    if(src.bytesAvailable < (staticHeader & NetworkMessage.BIT_MASK)){
      conosle.error('Not enought data to read message ID, byte available : ' + src.bytesAvailable + ' (needed : )' + (staticHeader & NetworkMessage.BIT_MASK));
      return parseHeader(src, true, staticHeader, messageId, messageLength);
    }
    messageLength = readMessageLength(staticHeader, src);
    if(src.bytesAvailable < messageLength){
      conosle.error('Not enought data to read message content, byte available : ' + src.bytesAvailable + ' (needed : )' + (messageLength));
      return parseHeader(src, true, staticHeader, messageId, messageLength);
    }
    return self.parse(src, messageId, messageLength);
  } 

  if(staticHeader && staticHeader !== -1){
    messageLength = readMessageLength(staticHeader, src);
    staticHeader = -1;
  }

  if ((src.bytesAvailable + buf.length) >= messageLength)
  {
    src.readBytes(buf, buf.length, (messageLength - buf.length));
    buf.position = 0;
    return self.parse(new CustomDataWrapper(buf), messageId, messageLength);
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

MessageReceiver.prototype.init = function () {
  var files = glob.sync(path.join(__dirname, 'messages/**/*.js'));
  files.forEach(function (file) {
    var message = require(file);
    self.messages[message.id] = message;
  });
}