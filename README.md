# d2protocol

Protocol dofus 2.0 (enums, messages, types).

# Install

```
$ npm install d2protocol
```

# Example usage

``` js
var d2protocol = require('d2protocol');

var identificationMessage = d2protocol.messages.get(4);

var version = d2protocol.types.get(11);

var sadiBreedId = d2protocol.enums['breed-enum'].Sadida;
```

# Documentation

See source to search what you need.
