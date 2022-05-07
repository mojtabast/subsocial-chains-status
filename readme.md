# Status Page For Subsocial Chains

A client for showing and checking active chains for Subsocial.

## Features

- 🤖 **Auto Refresh:** Configurable time for auto-refresh. *First, get visible chains (inside the viewport) then will get other chains by scrolling and entering the viewport.* Default: Every 5 Minutes.
- 👀 **Watch mode:** In addition to auto-refresh, we can configure time and duration for checking chains separately. For example, by configuring duration to 3 minutes, visibile chains (in the viewport) will be checked every 3 minutes when the user is scrolling the list.  
- 🔁 **Recoverable Errors:** If any request fails, can be retried and triggered manually by the user in UI.  
- 🚀 **Design System:** Separating basic components from the app and it can be published as npm packages or showcase the components by using Storybook.
- 💅 **Theme:** Using and supporting the theme so it can be easily updated and also can adding dark theme in future.

## Quick Start

```bash
yarn
yarn dev
```

Installing packages and running the app.


## Customization

Configs are inside `/packages/app/src/configs/constants.ts`.

#### Auto-Refresh
For setting Auto Refresh time, Try to change the value for  `OBSERVABLE_INTERVAL`

#### Watch Mode
For changing the duration for Watch Mode, Try to change the value for 
`QUEUE_DURATION`

## How it works

Watch Mode implemented based on [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and a custom `queue` lib. An Observer is watching elements of the list to know when an element is appearing on the viewport. `queue` is keeping the orders of inserted items and also checking the time to limit the run on specific time ranges.


Auto Refresh is using `getBoundingClientRect` to locate the position of elements and if they are inside the viewport, will be enqueued the item.

## Structure

#### App

Our Next.js-based app is using redux for state management and is fully typed by Typescript. 

`/components` is keeping the presentation layer of the app.

`/configs` keeps the global constants like endpoints and configurations.

`/features` is using for scoping a full feature including its fetching, storing, selecting and, types.

`/hooks` have app-level hooks like `useChains` which is a layer on top of `Queue` lib and some logic to make it work with React perfectly.

`/libs` are going to be the place for separating general-purpose modules from the app. I wrote a `Queue` lib to manage the connections and timings.

`/pages` are used for Next.js routing.

#### Components

Our mini design system is living inside `packages/components` and has its separate build process. This let us isolate the base components and easily share them with other projects to move fast.

We are using `storybook` to showcase the components.

## Credits

#### @sloth-system

I initially developed [@sloth-system](https://www.npmjs.com/~mojtabast) packages to easily access the theme and provide some useful props like padding to UI components. for example, by putting `paddingProps` to your styled component, it will accept `p` (padding), `pt` (padding top), `pb` (padding bottom), `pr` (padding right), `pl` (padding left), `px` (padding left and right) and `py` (padding top and bottom) which automatically using theme values.

#### Colors

Most of the colors used in the UI have been inspired by Github.
