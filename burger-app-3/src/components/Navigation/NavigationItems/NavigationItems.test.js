import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapater from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapater()});

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<NavigationItems/>);
})

describe('<NavigationItems />', ()=>{
  it('should render two <Navigations Item/> elements if not authenticated',()=>{
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it('should render three <Navigations Item/> elements is authenticated',()=>{
   wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it('should render logout <Navigations Item/> if is authenticated',()=>{
    wrapper.setProps({isAuthenticated: true});
     expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
   });
});