/**
 * @jest-environment jsdom
 */

import { TitleBar } from '../../lib/index';
import { render, RenderResult } from '@testing-library/svelte';
import match from "@el3um4s/match";

describe('TitleBar exist', () => {
    test('TitleBar is on page', () => {
        const titleBar = render(TitleBar);
        const header = titleBar.getByRole("banner");
        expect(header).toBeInTheDocument();
        expect(header).toBeVisible();
    });
    
    test('TitleBar is stylized', () => {
        const titleBar = render(TitleBar);
        const header = titleBar.getByRole("banner");
        expect(header).toHaveStyle({width: "100%"});
        expect(header).toHaveStyle({height: "2rem"});
    });

    test('TitleBar has a drag region', () => {
        const titleBar = render(TitleBar);
        const dragRegion = titleBar.getByTestId('drag-region');
        expect(dragRegion).toBeInTheDocument();
    });

    test('TitleBar has title', () => {
        const titleBar = render(TitleBar);
        const windowTitle = titleBar.container.getElementsByClassName("title");
        expect(windowTitle.length).toBe(1);
        const title = windowTitle[0];
        expect(title).toBeDefined();
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
        expect(title).not.toBeEmptyDOMElement();
    });    
});

describe( 'TitleBar has 3 icons (default)', () => {
    
    // const icons = (title:string, titleBar: RenderResult): void => {
    //     test(title, () => {
    //         const buttons = titleBar.container.getElementsByClassName("button");
    //         expect(buttons.length).toBe(3);
    
    //         for (let i = 0; i< buttons.length; i++) {
    //             const button = buttons[i];
    //             expect(button).toBeDefined();
    //             expect(button).toBeInTheDocument();
    //             expect(button).toBeVisible();
    //             expect(button).not.toBeEmptyDOMElement();
    //             expect(button).toHaveStyle("width: 2.25rem");
    //             const svgs = button.getElementsByTagName("svg");
    //             expect(svgs.length).toBeGreaterThanOrEqual(1);
    //             for(let j = 0; j < svgs.length; j++) {
    //                 const svg = svgs[j]
    //                 expect(svg).toBeDefined();
    //                 expect(svg).toBeInTheDocument();
    //                 expect(svg).toBeVisible();
    //             }
    //         }
            
    //     });
    // };

    // const titleBar: RenderResult = render(TitleBar);
    // icons('TitleBar has 3 icons (default)', titleBar)
})
