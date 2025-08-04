![CloudGamepad logo](/img/cloudgamepad-128.png?raw=true "CloudGamepad logo")
# CloudGamepad
[CloudGamepad in Chrome Web Store](https://chrome.google.com/webstore/detail/cloudgamepad/jjkloeoacnmjeojgohgpjbnljanejblp)

[CloudGamepad in Edge Web Store](https://microsoftedge.microsoft.com/addons/detail/cloudgamepad/mmjbaaknbhegejcbnldpogkbmfllknmg)

CloudGamepad is a Chrome and Edge Extension which allows arbitrary mapping of input devices to a "standard" virtual input controller which works with many cloud computing services!

With CloudGamepad, you can:

* Map up to four physical gamepads to a single "standard" virtual gamepad which works with many cloud services.
* Scale and offset axis to increase or decrease sensitivity, change axis ranges.
* Do normal things like playing GRID with a steering wheel and pedals!
* Do ridiculous things like playing Borderlands 3 with a flight yoke and throttle quadrant!

## Usage

Simply install the extension [on Chrome](https://chrome.google.com/webstore/detail/cloudgamepad/jjkloeoacnmjeojgohgpjbnljanejblp) or [on Edge](https://microsoftedge.microsoft.com/addons/detail/cloudgamepad/mmjbaaknbhegejcbnldpogkbmfllknmg) and open or refresh the cloud service you want to use! Click the extension icon to configure your virtual joypad.

Once the extension menu is open, it should automatically look for any joysticks plugged into your PC. If none show up, try pressing a button or moving a stick on one.

Once the mapping controls appear, you can now set each button and axis for the virtual gamepad. The "target gamepad" at selected at the top is the gamepad which will be scanned for input when you click on a mapping button. If you want to include controls from multiple gamepads, make sure you switch this target option to the correct one BEFORE pressing a mapping button.

The "Scale" field will multiply input by the factor specified. For example, setting this to two will cause the joystick to become twice as sensitive, but also lose twice its range of motion, since CloudGamepad caps axis values to the range `[-1, 1]`. You can also use a negative scale to invert the axis.

The "Offset" field will add a constant value to the input.

CloudGamepad has manifest permissions to run on [gamepad-tester.com](https://gamepad-tester.com) and [gamepad.e7d.io](https://gamepad.e7d.io) where you can view the output values of the virtual controller. I highly recommend setting up your virtual controller while on one of these pages!

## Testing the configuration
CloudGamepad has manifest permissions to run on the following test website:

- https://hardwaretester.com/gamepad
- https://gamepad.e7d.io/

## Cloud services supported
CloudGamepad has manifest permissions to run on the following websites:

- https://cloud.boosteroid.com
- https://www.xbox.com
- https://play.geforcenow.com
- https://shadow.tech
- https://www.paperspace.com
- https://parsec.app
- https://www.nvidia.com
- https://playkey.net
- https://www.netboom.com
- https://www.blacknut.com
- https://www.furioos.com
- https://luna.amazon.com

This does not mean that the extension was tested in each of these sites. At the moment the extension was mostly tested in XboxCloud.

### Disclaimer
CloudGamepad is not affiliated, associated, authorized, endorsed by, or in any way officially connected with any of the cloud services that are listed above or that are allowed in the manifest file. Nor with any companies associated with them or any of their subsidiaries or affiliates.

## Scale and offset example
Say you're trying to map <kbd>R2</kbd> to a controller axis that ranges from `[-1, 1]`. Because <kbd>R2</kbd> expects a value in the range `[0, 1]`, we must both scale and offset the axis. In this case, the scale would be `0.5` (changing the range to `[-0.5, 0.5]`) and the offset would be `0.5`, (changing the range to `[0, 1]`).

## Latency
CloudGamepad adds a bit of latency to control inputs. I'm actively working to minimize this as much as possible!

## Pull requests
All pull requests are welcome! Please feel free to improve CloudGamepad as you see fit, there's many improvements to be made!

## Credits

* A huge thanks to [ihatecsv](https://github.com/ihatecsv) that created the extension [ControlStadia](https://www.reddit.com/r/Stadia/comments/f0zir0/its_almost_happening/fh209gm/). This project is an extension of the his awesome project.
* Also thanks to `/u/-sxp-` for creating the [controller mapping fix code snippet](https://www.reddit.com/r/Stadia/comments/f0zir0/its_almost_happening/fh209gm/) that inspired [TouchStadia](https://github.com/ihatecsv/TouchStadia), that consequently inspired the [ControlStadia](https://www.reddit.com/r/Stadia/comments/f0zir0/its_almost_happening/fh209gm/), which this project is based on.
* Lastly, thanks for all contributions and improviments to the [ControlStadia](https://www.reddit.com/r/Stadia/comments/f0zir0/its_almost_happening/fh209gm/) extension, they were merged and used in this project:
- [KarelHu](https://github.com/KarelHu/ControlStadia/commit/5fa53eebdc9fdb96b25f9fb3256659570050ed02)
- [wqhjstudios](https://github.com/wqhjstudios/ControlStadia/commit/8dfec4220c41e7c8aa353cfe5e0ca742c6cfe284)
- [jobukkit](https://github.com/jobukkit/ControlStadia/commit/036cd9f9a950dbb7980ba815373c3f25017656f5)
- [untlsn](https://github.com/untlsn/ControlAll/commit/1cc7ae29c6b0dc292f185d9271975fa518841ac3)

The awesome logo of this project was made [by macrovector](https://www.freepik.com/free-vector/cloud-gaming-isometric-icons-set-with-cyberspace-symbols-isolated-vector-illustration_26760934.htm#query=cloud%20gamepad&position=0&from_view=search&track=ais) and is available on Freepik. Thanks for the awesome image!


