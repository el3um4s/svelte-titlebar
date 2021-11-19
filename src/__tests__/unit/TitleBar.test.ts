/**
 * @jest-environment jsdom
 */

import { TitleBar } from '$lib/index';
import { render } from '@testing-library/svelte';

test('TitleBar is on page', () => {
	const titleBar = render(TitleBar);
	const header = titleBar.getByRole('banner');
	expect(header).toBeInTheDocument();
	expect(header).toBeVisible();
});

test('TitleBar is stylized', () => {
	const titleBar = render(TitleBar);
	const header = titleBar.getByRole('banner');
	expect(header).toHaveStyle({ width: '100%' });
	expect(header).toHaveStyle({ height: '2rem' });
});

test('TitleBar has a drag region', () => {
	const titleBar = render(TitleBar);
	const dragRegion = titleBar.getByTestId('drag-region');
	expect(dragRegion).toBeInTheDocument();
});

test('TitleBar has title', () => {
	const titleBar = render(TitleBar);
	const windowTitle = titleBar.container.getElementsByClassName('title');
	expect(windowTitle.length).toBe(1);
	const title = windowTitle[0];
	expect(title).toBeDefined();
	expect(title).toBeInTheDocument();
	expect(title).toBeVisible();
	expect(title).not.toBeEmptyDOMElement();
});
