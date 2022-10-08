import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Icon from '../icon/icon';

describe("icon", () => {
    it("icon render", () => {
        render(<Icon name="qq"/>);
        const iconElement = screen.getByTestId("test-icon");
        expect(iconElement).toBeInTheDocument();
    });
    it("icon render", () => {
        const json = render(<Icon name="qq"/>);
        expect(json).toMatchSnapshot();

    });
    it("icon click", () => {
        const fn = jest.fn();
        render(<Icon name="qq" onClick={fn}/>);
        const iconElement = screen.getByTestId("test-icon");
        expect(iconElement).toBeInTheDocument();
        fireEvent.click(iconElement)
        expect(fn).toBeCalled();
    })
});
