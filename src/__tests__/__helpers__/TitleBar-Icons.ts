/**
 * jest
 */

import type { RenderResult } from '@testing-library/svelte';

const standardStyle = {
    width: "width: 2.25rem"
}

const icons = (title: string, titleBar: RenderResult): void => {
    test(title, () => {
        const buttons = titleBar.container.getElementsByClassName("button");

        expect(buttons.length).toBe(3);

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            expect(button).toBeDefined();
            expect(button).toBeInTheDocument();
            expect(button).toBeVisible();
            expect(button).not.toBeEmptyDOMElement();
            expect(button).toHaveStyle(standardStyle.width);
            const svgs = button.getElementsByTagName("svg");
            expect(svgs.length).toBe(1);
            const svg = svgs[0];
            expect(svg).toBeDefined();
            expect(svg).toBeInTheDocument();
            expect(svg).toBeVisible();
        }
    });
}

const iconNameIsVisible = (title: string, titleBar: RenderResult, icon: { position: number; dataTestId: string; }): void => {
    test(title, () => {
        // const buttons = titleBar.container.querySelectorAll(".button");
        const buttons = titleBar.container.getElementsByClassName("button");
        const { position, dataTestId } = { ...icon };
        expect(position).toBeGreaterThan(0);
        expect(buttons.length).toBeGreaterThanOrEqual(position);

        const button = buttons[position - 1];
        expect(button).toBeDefined();
        expect(button.getAttribute("data-testid")).toBe(dataTestId);

        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(button).not.toBeEmptyDOMElement();
        expect(button).toHaveStyle(standardStyle.width);

        const svgs = button.getElementsByTagName("svg");
        expect(svgs.length).toBe(1);
        const svg = svgs[0];
        expect(svg.getAttribute("data-testid")).toBe(`SVG${dataTestId}`);
        expect(svg).toBeDefined();
        expect(svg).toBeInTheDocument();
        expect(svg).toBeVisible();
    });
}

const iconWithMaximizedTrue = (title: string, titleBar: RenderResult): void => {
    iconNameIsVisible(`${title}, isMaximized:true, IconMinimize:visible`, titleBar, { position: 1, dataTestId: "IconMinimize" });
    iconNameIsVisible(`${title}, isMaximized:true, IconUnmaximize:visible`, titleBar, { position: 2, dataTestId: "IconUnmaximize" });
    iconNameIsVisible(`${title}, isMaximized:true, IconClose:visible`, titleBar, { position: 3, dataTestId: "IconClose" });
}

const iconWithMaximizedFalse = (title: string, titleBar: RenderResult): void => {
    iconNameIsVisible(`${title}, isMaximized:false, IconMinimize:visible`, titleBar, { position: 1, dataTestId: "IconMinimize" });
    iconNameIsVisible(`${title}, isMaximized:false, IconMaximize:visible`, titleBar, { position: 2, dataTestId: "IconMaximize" });
    iconNameIsVisible(`${title}, isMaximized:false, IconClose:visible`, titleBar, { position: 3, dataTestId: "IconClose" });
}

export { icons, iconNameIsVisible, iconWithMaximizedTrue, iconWithMaximizedFalse };