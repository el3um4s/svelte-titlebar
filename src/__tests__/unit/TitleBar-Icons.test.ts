/**
 * @jest-environment jsdom
 */

import { TitleBar } from '$lib/index';
import { render } from '@testing-library/svelte';

test('TitleBar has 3 icons (default)', () => {
    const titleBar = render(TitleBar);
    const buttonsDefault = titleBar.container.getElementsByClassName("button");
    expect(buttonsDefault.length).toBe(3);
    
    titleBar.component.$set({isMaximized:true});
    const buttonsMaximized = titleBar.container.getElementsByClassName("button");
    expect(buttonsMaximized.length).toBe(3);
    
    titleBar.component.$set({isMaximized:false});
    const buttonsMinimized = titleBar.container.getElementsByClassName("button");
    expect(buttonsMinimized.length).toBe(3);
});

test('TitleBar has IconMinimize and IconClose', () => {
    const titleBar = render(TitleBar);
    const buttons = titleBar.container.getElementsByClassName("button");

    const iconMinimize = buttons[0];
    expect(iconMinimize).toBeInTheDocument();
    expect(iconMinimize).toBeVisible();
    expect(iconMinimize.getAttribute("data-testid")).toBe("IconMinimize");
    expect(iconMinimize.getElementsByTagName("svg")[0].getAttribute("data-testid")).toBe("SVGIconMinimize");


    const iconClose = buttons[2];
    expect(iconClose).toBeInTheDocument();
    expect(iconClose).toBeVisible();
    expect(iconClose.getAttribute("data-testid")).toBe("IconClose");
    expect(iconClose.getElementsByTagName("svg")[0].getAttribute("data-testid")).toBe("SVGIconClose");
})

test('TitleBar has IconMaximize when isMaximized = false', () => {
    const titleBar = render(TitleBar);
    const buttons = titleBar.container.getElementsByClassName("button");

    const iconMaximize = buttons[1];
    expect(iconMaximize).toBeInTheDocument();
    expect(iconMaximize).toBeVisible();
    expect(iconMaximize.getAttribute("data-testid")).toBe("IconMaximize");
    expect(iconMaximize.getElementsByTagName("svg")[0].getAttribute("data-testid")).toBe("SVGIconMaximize");
})

test('TitleBar has IconUnmaximize when isMaximized = true', () => {
    const titleBar = render(TitleBar, {isMaximized: true});
    const buttons = titleBar.container.getElementsByClassName("button");

    const iconMaximize = buttons[1];
    expect(iconMaximize).toBeInTheDocument();
    expect(iconMaximize).toBeVisible();
    expect(iconMaximize.getAttribute("data-testid")).toBe("IconUnmaximize");
    expect(iconMaximize.getElementsByTagName("svg")[0].getAttribute("data-testid")).toBe("SVGIconUnmaximize");
})

test('TitleBar change icons when is maximized and unmaximized', () => {
    const titleBar = render(TitleBar, {isMaximized: true});
    const buttons = titleBar.container.getElementsByClassName("button");

    const iconMaximize = buttons[1];
    expect(iconMaximize).toBeInTheDocument();
    expect(iconMaximize).toBeVisible();
    expect(iconMaximize.getAttribute("data-testid")).toBe("IconUnmaximize");
    expect(iconMaximize.getElementsByTagName("svg")[0].getAttribute("data-testid")).toBe("SVGIconUnmaximize");

    titleBar.component.$set({isMaximized:true});
    expect(iconMaximize).toBeInTheDocument();
    expect(iconMaximize).toBeVisible();
    expect(iconMaximize.getAttribute("data-testid")).toBe("IconUnmaximize");
    expect(iconMaximize.getElementsByTagName("svg")[0].getAttribute("data-testid")).toBe("SVGIconUnmaximize");

    titleBar.component.$set({isMaximized:false});
    expect(iconMaximize).toBeInTheDocument();
    expect(iconMaximize).toBeVisible();
    expect(iconMaximize.getAttribute("data-testid")).toBe("IconUnmaximize");
    expect(iconMaximize.getElementsByTagName("svg")[0].getAttribute("data-testid")).toBe("SVGIconUnmaximize");
})
