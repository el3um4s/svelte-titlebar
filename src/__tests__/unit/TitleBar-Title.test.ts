/**
 * @jest-environment jsdom
 */

import { TitleBar } from '$lib/index';
import { render } from '@testing-library/svelte';

test('TitleBar has title', () => {
    const titleBar = render(TitleBar);
    const title = titleBar.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent("Title");
});

test('TitleBar change the titles', async () => {
    const titleBar = render(TitleBar, {title:"Old Title"});
    const title = titleBar.getByTestId("title");
    expect(title).toHaveTextContent("Old Title");

    await titleBar.component.$set({title: "New Title"});
    expect(title).toHaveTextContent("New Title");
});


test('TitleBar has no title', () => {
    const titleBar = render(TitleBar, {title: ""});
    const title = titleBar.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent("");
});