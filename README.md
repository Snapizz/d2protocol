# d2protocol

Protocol dofus 2.0 (enums, messages, types).

# Install

```
$ npm install d2protocol
```

# Example usage

``` js
var d2protocol = require('d2protocol');

var identificationMessage = d2protocol.messages.get(4); //4 is message id

var version = d2protocol.types.get(11); // 11 is type id

var sadiBreedId = d2protocol.enums['breed-enum'].Sadida; // breed-enum is filename without .js
```

# Documentation

See source to find what you need.
