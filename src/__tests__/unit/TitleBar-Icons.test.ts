/**
 * @jest-environment jsdom
 */

import { TitleBar } from '$lib/index';
import { render, RenderResult } from '@testing-library/svelte';

import { icons, iconNameIsVisible, iconWithMaximizedTrue, iconWithMaximizedFalse } from "../__helpers__/TitleBar-Icons";

let titleBar: RenderResult;

describe("a", () => {
    titleBar = render(TitleBar);
    icons('TitleBar has 3 icons (default)', titleBar);
    titleBar.unmount();
});

describe("b", () => {
    // const titleBar: RenderResult = render(TitleBar);
    titleBar = render(TitleBar);
    iconWithMaximizedFalse("default", titleBar);
    titleBar.unmount();
});


// const titleBar: RenderResult = render(TitleBar);
// describe("a",async () => {
//      await icons('TitleBar has 3 icons (default)', titleBar);
// });

// describe("b", () => {
//     iconWithMaximizedTrue("default", titleBar);
// });
    // const titleBar: RenderResult = render(TitleBar);
    // icons('TitleBar has 3 icons (default)', titleBar);
    // iconWithMaximizedTrue("default", titleBar);


// titleBar.component.$set({ isMaximized: false });
// icons('TitleBar has 3 icons (isMaximized = false)', titleBar);
// iconWithMaximizedFalse("default", titleBar);

// titleBar.component.$set({ isMaximized: true });
// icons('TitleBar has 3 icons (isMaximized = true)', titleBar);
// iconWithMaximizedTrue("default", titleBar);

// const titleLong = Array(1000).fill("A");
// titleBar.component.$set({ title: titleLong.toString() });
// titleBar.component.$set({ isMaximized: false });
// iconWithMaximizedFalse("Long Title", titleBar);
// titleBar.component.$set({ isMaximized: true });
// iconWithMaximizedTrue("Long Title", titleBar);

// titleBar.component.$set({ title: "A".toString() });
// titleBar.component.$set({ isMaximized: false });
// iconWithMaximizedFalse("Title Short", titleBar);
// titleBar.component.$set({ isMaximized: true });
// iconWithMaximizedTrue("Title Short", titleBar);

