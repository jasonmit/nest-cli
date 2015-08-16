# nest-cli

An unofficial command-line tool for managing your Nest thermostat.

## Installing

* `git clone git@github.com:jasonmit/nest-cli.git`
* `cd nest-cli && npm install && npm link`
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

	login                            login to your nest account via oauth
	config <key> [value]             get/set a configuration option
	devices|ls [options]             get a list of known devices
	default-device <deviceId>        sets the default device id
	temp|t <mode> <temp> [deviceId]  modes: cool, heat, heat-cool
	state|s <mode> [deviceId]        available modes: cool, heat, heat-cool, off
	read|r [deviceId]                reads a device by device id
	off [deviceId]                   turns off the HVAC
```

## Set Default Thermostat

To avoid the tedious task of entering in your thermostat device ID each time, you can mark a thermostat as the default.

List all devices linked to your account:

`nest-cli ls`

Once you determine which device you want to mark as your default:

`nest-cli default-thermostat <deviceId>`

## TODO

* Fan mode
* Fan scheduling
* Away mode
* Humidity toggle
* Support Nest cam and Nest protect

## License

The MIT License (MIT)

Copyright (c) 2015

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
