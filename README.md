# Alfred workflow for Calendly

An unofficial workflow for Calendly.

## Usage

By default, `cal` is the keyword to activate the workflow.
Use that to search for your different event types.
Press Enter to copy to clipboard and/or paste into the current application.

Example:

<img width="608" alt="screen shot 2018-04-28 at 1 28 27 pm" src="https://user-images.githubusercontent.com/9061/39399226-1af362ae-4ae8-11e8-9b1a-d8582dcb9e14.png">

## Installation

Download the [latest GitHub release](https://github.com/promptworks/alfred-calendly/releases) and double click it to install.

## Updates

Currently, updates are provided via Github releases. If you want to see when there's an update, subscribe to the releases.
Here's the atom feed: https://github.com/promptworks/alfred-calendly/releases.atom

## Implementation Notes

### API key

By default the API key is stored in `~/.config/calendly/api-key`.
This can be changed via workflow's environment variable.

### Icons

The icons are generated from the colors that Calendly lets you choose for your event types.

To update the icons, update the list of colors in `generate_even_color_icons` and rerun the script.
Please optimize the images after generating them via ImageOptim or something similar.

## Contributing

PRs welcome.
