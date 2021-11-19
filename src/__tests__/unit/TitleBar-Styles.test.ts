/**
 * @jest-environment jsdom
 */

import { TitleBar } from '$lib/index';
import { render } from '@testing-library/svelte';

test('TitleBar has default style', () => {
	const titleBar = render(TitleBar);
	const header = titleBar.getByRole('banner');
	expect(header).toBeInTheDocument();
	expect(header).toBeVisible();

	expect(header).not.toHaveClass('theme-light');
	expect(header).not.toHaveClass('theme-dark');
});

test('TitleBar has default style', () => {
	const titleBar = render(TitleBar, { class: '' });
	const header = titleBar.getByRole('banner');
	expect(header).toBeInTheDocument();
	expect(header).toBeVisible();

	expect(header).not.toHaveClass('theme-light');
	expect(header).not.toHaveClass('theme-dark');
});

test('TitleBar has theme light', () => {
	const titleBar = render(TitleBar, { class: 'theme-light' });
	const header = titleBar.getByRole('banner');
	expect(header).toBeInTheDocument();
	expect(header).toBeVisible();
	expect(header).toHaveClass('theme-light');
});

test('TitleBar has theme dark', () => {
	const titleBar = render(TitleBar, { class: 'theme-dark' });
	const header = titleBar.getByRole('banner');
	expect(header).toBeInTheDocument();
	expect(header).toBeVisible();
	expect(header).toHaveClass('theme-dark');
});

test('TitleBar change theme from default to dark and light', async () => {
	const titleBar = render(TitleBar);
	const header = titleBar.getByRole('banner');

	await titleBar.component.$set({ class: 'theme-light' });
	expect(header).toHaveClass('theme-light');
	expect(header).not.toHaveClass('theme-dark');

	await titleBar.component.$set({ class: 'theme-dark' });
	expect(header).not.toHaveClass('theme-light');
	expect(header).toHaveClass('theme-dark');
});
