TODO: Image logo
![CloudGamepad logo](/img/cs-128.png?raw=true "CloudGamepad logo")
# CloudGamepad
TODO: Deploy to edge and chrome and update the links
[CloudGamepad in Chrome Web Store](https://chrome.google.com/webstore/detail/cloudgamepad/faodiopjdcjfeflfmeadfkgodcbioejp)

CloudGamepad is a Chrome and edge Extension which allows arbitrary mapping of input devices to a "standard" virtual input controller which works with many cloud computing services!

With CloudGamepad, you can:

* Map up to four physical gamepads to a single "standard" virtual gamepad which works with many cloud services.
* Scale and offset axis to increase or decrease sensitivity, change axis ranges.
* Do normal things like playing GRID with a steering wheel and pedals!
* Do ridiculous things like playing Borderlands 3 with a flight yoke and throttle quadrant!

## Demo
TODO: Update video
[![Demo video](https://img.youtube.com/vi/cgsf7KFBqUY/0.jpg)](https://www.youtube.com/watch?v=cgsf7KFBqUY)

## Usage
TODO: Update links
Simply [install the extension](https://chrome.google.com/webstore/detail/cloudgamepad/faodiopjdcjfeflfmeadfkgodcbioejp) and open or refresh the cloud service you want to use! Click the extension icon to configure your virtual joypad.

Once the extension menu is open, it should automatically look for any joysticks plugged into your PC. If none show up, try pressing a button or moving a stick on one.

Once the mapping controls appear, you can now set each button and axis for the virtual gamepad. The "target gamepad" at selected at the top is the gamepad which will be scanned for input when you click on a mapping button. If you want to include controls from multiple gamepads, make sure you switch this target option to the correct one BEFORE pressing a mapping button.

The "Scale" field will multiply input by the factor specified. For example, setting this to two will cause the joystick to become twice as sensitive, but also lose twice its range of motion, since CloudGamepad caps axis values to the range `[-1, 1]`. You can also use a negative scale to invert the axis.

The "Offset" field will add a constant value to the input.

CloudGamepad has manifest permissions to run on [gamepad-tester.com](https://gamepad-tester.com), where you can view the output values of the virtual controller. I highly recommend setting up your virtual controller while on this page!

## Xbox cloud support
TODO: Update support for cloud services, and add message for people to add missing services.
This extension can also be used on Xbox Cloud, but at the moment it is primarily builded for Stadia.

### Scale and offset example
Say you're trying to map <kbd>R2</kbd> to a controller axis that ranges from `[-1, 1]`. Because <kbd>R2</kbd> expects a value in the range `[0, 1]`, we must both scale and offset the axis. In this case, the scale would be `0.5` (changing the range to `[-0.5, 0.5]`) and the offset would be `0.5`, (changing the range to `[0, 1]`).

## Latency
CloudGamepad adds a bit of latency to control inputs. I'm actively working to minimize this as much as possible!

## Pull requests
All pull requests are welcome! Please feel free to improve CloudGamepad as you see fit, there's many improvements to be made!

## Credits
* Thanks to `/u/-sxp-` for creating the [controller mapping fix code snippet](https://www.reddit.com/r/Stadia/comments/f0zir0/its_almost_happening/fh209gm/) that inspired [TouchStadia](https://github.com/ihatecsv/TouchStadia), which consequently inspired this extension.
TODO: Add thanks to drake about his library and how it inspired this one

TODO: Thanks all changes to the Stadia project that were ported to this project
- https://github.com/KarelHu/ControlStadia/commit/5fa53eebdc9fdb96b25f9fb3256659570050ed02 (https://github.com/ihatecsv/ControlStadia/pull/19/files)
- https://github.com/wqhjstudios/ControlStadia/commit/8dfec4220c41e7c8aa353cfe5e0ca742c6cfe284
- https://github.com/jobukkit/ControlStadia/commit/036cd9f9a950dbb7980ba815373c3f25017656f5
- https://github.com/untlsn/ControlAll/commit/1cc7ae29c6b0dc292f185d9271975fa518841ac3

TODO: Got the cloud websites from here: https://www.techpout.com/best-cloud-gaming-services/#3_Paperspace

## Disclaimer
TODO: Add all the others cloud services
CloudGamepad is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Stadia, Google LLC, Alphabet Inc., Xbox Cloud, Xbox, Microsoft or any of their subsidiaries or affiliates.
