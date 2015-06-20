var glob = require( 'glob' ),
    Q = require( 'q' ),
    NetworkMessage = require('d2com').networkMessage,
    CustomDataWrapper = require('d2com').customDataWrapper,
    path = require( 'path' );

var messages = {}, self;

var MessageReceiver = function () {
  self = this;
}

module.exports = {
  class: MessageReceiver,
  instance: new MessageReceiver()
};

MessageReceiver.prototype.parse = function parse(input, messageId, messageLength) {
  var deferred = Q.defer();
  if(!self.messages){
    return init().then(function (messages) {
      self.messages = messages;
      return self.parse(input, messageId, messageLength);
    })
  }

  if(!messageId){
    return parseHeader(input);
  }
  
  var Message = self.messages[messageId];
  if (!Message)
  {
    deferred.reject('Unknown packet received (ID ' + messageId + ', length ' + messageLength + ')');
  }
  else{
    var message = new (Message)();
    message.unpack(input, messageLength);
    deferred.resolve(message);
  }

  return deferred.promise;
};

function parseHeader (src, splittedPacket, staticHeader, messageId, messageLength, buf) {
  var deferred = Q.defer();

  try{
    if(!splittedPacket){
      if(src.bytesAvailable < 2){
        throw new Error('Not enought data to read the header, byte available : ' + src.bytesAvailable + ' (needed : 2)');
      }
      buf = new Buffer(32);
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
  }
  catch(err){
    deferred.reject(err);
  }

  return deferred.promise;
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

MessageReceiver.prototype.create = function (messageId) {
  var deferred = Q.defer();
  if(!self.messages){
    return init().then(function (messages) {
      self.messages = messages;
      return self.create(messageId);
    })
  }

  var Message = self.messages[messageId];
  if(!Message)
  {
    deferred.reject('Unknown packet received (ID ' + messageId + ')');
  }
  else{
    deferred.resolve(new Message());
  }

  return deferred.promise;
}

function init () {
  var deferred = Q.defer();

  glob(path.join(__dirname, 'messages/**/*.js'), function( err, files ) {
    if(err){
      deferred.reject(err);
      return;
    }
    var messages = {};
    files.forEach(function (file) {
      var message = require(file);
      messages[message.id] = message.class;
    });
    deferred.resolve(messages);
  });

  return deferred.promise;
}