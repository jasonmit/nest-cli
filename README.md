# nest-cli

[![npm version](https://badge.fury.io/js/nest-cli.svg)](http://badge.fury.io/js/nest-cli)

An unofficial command-line tool for managing your Nest thermostat.

## Requirements

* iojs >= 3.0.0 preferred (performance due to not having to use Babel) but node >= 0.10.x will suffice

## Installing

### From Source

* `git clone git@github.com:jasonmit/nest-cli.git`
* `cd nest-cli && npm install && npm link`

### From npm

* `npm install nest-cli`

### Configuring the application

* Register a Nest application https://developer.nest.com/clients/new
  * Be sure to check: Away, Thermostat, Smoke+CO Alarm all with read/write access
  * Copy the generated client ID and secret
* `nest-cli config CLIENT_ID <ID> && nest-cli config CLIENT_SECRET <SECRET>`
* `nest-cli login`
* Done, you never have to do this again.

## Usage

`nest-cli --help`

```sh
Commands:

  login                                login to your nest account via oauth
  logout                               logout of nest account
  config <key> [value]                 get/set a configuration option
  default-thermostat <thermostatId>    sets the default thermostat device id
  devices|ls [options]                 get a list of known devices
  temp|t <mode> <temp> [thermostatId]  modes: cool, heat, heat-cool
  away <mode> [structureId]            available modes: home, away, auto-away, unknown
  structures [options]                 list of structures associated with account
  state|s <mode> [thermostatId]        available modes: cool, heat, heat-cool, off
  read|r [thermostatId]                read a thermostat by device id
  off [thermostatId]                   turns off the HVAC

Options:

  -h, --help     output usage information
  -V, --version  output the version number
```

## Set Default Thermostat

To avoid the tedious task of entering in your thermostat device ID each time, you can mark a thermostat as the default.

List all devices linked to your account:

`nest-cli ls`

Once you determine which device you want to mark as your default:

`nest-cli default-thermostat <deviceId>`

## TODO

* Live UI for monitoring stats
* Fan mode
* Fan scheduling
* Away mode
* Support Nest cam and Nest protect

## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
