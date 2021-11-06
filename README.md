# SVELTE-TITLEBAR

_A Titlebar component for Svelte Projects_

Live demo: [el3um4s.github.io/svelte-titlebar/](https://el3um4s.github.io/svelte-titlebar/)
NPM: [@el3um4s/svelte-titlebar](https://www.npmjs.com/package/@el3um4s/svelte-titlebar)

### Install and use the package

To use the package in a project:

`npm i -D @el3um4s/svelte-titlebar`

and then in a file:

```svelte
<script>
	import { TitleBar } from '@el3um4s/svelte-titlebar';
</script>

<TitleBar
	{title}
	{isMaximized}
	on:clickMinimize={() => log('minimize')}
	on:clickUnmaximize={unmaximize}
	on:clickMaximize={maximize}
	on:clickClose={() => log('close')}
	class={theme}
	--background-color={backgroundColor}
	--text-color={textColor}
/>
```

### API - Props

| Prop Name   | Type    | Default value |
| :---------- | :------ | :------------ |
| title       | string  | Title         |
| isMaximized | boolean | false         |

### API - Forwarded events

- on:clickMinimize
- on:clickUnmaximize
- on:clickMaximize
- on:clickClose

### Screenshot

![test-default](https://raw.githubusercontent.com/el3um4s/svelte-titlebar/master/src/__tests__/e2e/__image_snapshots__/title-bar-e-2-e-test-ts-test-themes-theme-default-1-snap.png)

![test-light](https://raw.githubusercontent.com/el3um4s/svelte-titlebar/master/src/__tests__/e2e/__image_snapshots__/title-bar-e-2-e-test-ts-test-themes-theme-light-1-snap.png)

![test-themes-colors](https://raw.githubusercontent.com/el3um4s/svelte-titlebar/master/src/__tests__/e2e/__image_snapshots__/title-bar-e-2-e-test-ts-test-themes-colors-1-snap.png)
