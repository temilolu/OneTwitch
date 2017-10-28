import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../Components/Search';
import GamesCard from '../Components/GamesCard';

configure({ adapter: new Adapter() });

test('Search snapshot test', () => {
	const component = shallow(<Search />);
	expect(component).toMatchSnapshot();
});

test('Search should render correct amount of games ', () => {
	const component = shallow(<Search />);
	expect(component.find(GamesCard).length).toEqual(component.find(GamesCard).length);
});

xtest('Search should render correct amount of games based on search terms', () => {});
