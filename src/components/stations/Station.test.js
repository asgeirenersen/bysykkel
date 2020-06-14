import React from 'react';
import { shallow } from 'enzyme';

import Station, { StationStatus } from './Station'
import { mockMergedLists } from '../../testData';

describe('Station', () => {
    it('should render station info inside an li element', () => {
        const stationItem = mockMergedLists[2];
        const shallowWrapper = shallow(<Station station={stationItem} />);

        expect(shallowWrapper).toHaveDisplayName('li');
        expect(shallowWrapper).toContainMatchingElement('span.stationName');
        expect(shallowWrapper).toContainReact(<StationStatus status={stationItem.status} />);
    });

    it('should render statusNotAvailable element if status property is not present on station', () => {
        const stationItem = { ...mockMergedLists[3] };
        stationItem.status = undefined;
        const shallowWrapper = shallow(<Station station={stationItem} />);

        expect(shallowWrapper).toContainMatchingElement('span.stationName');
        expect(shallowWrapper).toContainMatchingElement('span.statusNotAvailable');
    });
});

describe('StationStatus', () => {
    it('should show the correct number of available bikes and docks', () => {
        const statusItem = { ...mockMergedLists[0].status };
        const shallowWrapper = shallow(<StationStatus status={statusItem} />);

        expect(shallowWrapper).toContainMatchingElement('.statusItem.bikes');
        expect(shallowWrapper).toContainMatchingElement('.statusItem.docks');

        const bikesCountWrapper = shallowWrapper.find('.statusItem.bikes .statusValue');
        expect(bikesCountWrapper).toHaveText(statusItem.num_bikes_available.toString());
        const docksCountWrapper = shallowWrapper.find('.statusItem.docks .statusValue');
        expect(docksCountWrapper).toHaveText(statusItem.num_docks_available.toString());
    });
});



