# \#Do Keen IO

This is a analytics implementation plugin for sending [\#Do](https://github.com/UXFoundry/hashdo) data to [Keen IO](https://keen.io/).

## Getting Started
To make use of Keen IO for analytics in a [\#Do](https://github.com/UXFoundry/hashdo) project, you simply replace the built-in `analytics` object property with this implementation.

```js
var hashdo = require('hashdo');

// Use the Keen IO analytics plugin.
hashdo.analytics = require('hashdo-analytics-keen');

// Using the hashdo-web project?
var hashdoweb = require('hashdo-web');

hashdoweb.hashdo.analytics = require('hashdo-analytics-keen');
```

## Environment Variables
To successfully send data to Keen IO, the following environment variables must be set.

#### `KEEN_PROJECT_ID`
The project ID can be found on the selected [Keen IO](https://keen.io/) project page.

#### `KEEN_WRITE_KEY`
The write key can be found on the selected [Keen IO](https://keen.io/) project page by clicking on the "Show API Keys" button.

## License
Copyright 2015 (c). All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions
and limitations under the License.