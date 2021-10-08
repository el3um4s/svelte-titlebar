/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import TitleBar from "$lib/TitleBar.svelte";

test('TitleBar is in the document', () => {
    const titleBar = render(TitleBar);

    const header = titleBar.getByRole("banner");
    expect(header).toBeVisible();
})

test('Icons are in the document (start)', () => {
    const titleBar = render(TitleBar);

    const iconMinimize = titleBar.getByTestId("IconMinimize");
    expect(iconMinimize).toBeInTheDocument();

    const iconMaximize = titleBar.getByTestId("IconMaximize");
    expect(iconMaximize).toBeInTheDocument();

    const iconClose = titleBar.getByTestId("IconClose");
    expect(iconClose).toBeInTheDocument();
})