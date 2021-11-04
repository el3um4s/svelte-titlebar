/**
 * @jest-environment jsdom
 */

import { TitleBar } from '$lib/index';
import { render, fireEvent } from '@testing-library/svelte';

test("click on Minimize icon", async() => {
    const titleBar = render(TitleBar);

    const mockEvent = jest.fn();
    titleBar.component.$on('clickMinimize', (e) => {mockEvent(e.detail)});

    const iconMinimize = titleBar.getByTestId("IconMinimize");
    await fireEvent.click(iconMinimize);

    expect(mockEvent).toHaveBeenCalled();
    expect(mockEvent).toHaveBeenCalledTimes(1);

})

test("click on Close icon", async() => {
    const titleBar = render(TitleBar);

    const mockEvent = jest.fn();
    titleBar.component.$on('clickClose', (e) => {mockEvent(e.detail)});

    const iconMinimize = titleBar.getByTestId("IconClose");
    await fireEvent.click(iconMinimize);

    expect(mockEvent).toHaveBeenCalled();
    expect(mockEvent).toHaveBeenCalledTimes(1);

})


test("click on Maximize icon", async() => {
    const titleBar = render(TitleBar);

    const mockEvent = jest.fn();
    titleBar.component.$on('clickMaximize', (e) => {mockEvent(e.detail)});

    const iconMinimize = titleBar.getByTestId("IconMaximize");
    await fireEvent.click(iconMinimize);

    expect(mockEvent).toHaveBeenCalled();
    expect(mockEvent).toHaveBeenCalledTimes(1);

})

test("click on Unmaximize icon", async() => {
    const titleBar = render(TitleBar, {isMaximized:true});

    const mockEvent = jest.fn();
    titleBar.component.$on('clickUnmaximize', (e) => {mockEvent(e.detail)});

    const iconMinimize = titleBar.getByTestId("IconUnmaximize");
    await fireEvent.click(iconMinimize);

    expect(mockEvent).toHaveBeenCalled();
    expect(mockEvent).toHaveBeenCalledTimes(1);

})

