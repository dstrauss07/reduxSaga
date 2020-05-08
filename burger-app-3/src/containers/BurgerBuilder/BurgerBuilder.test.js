import { BurgerBuilder} from './BurgerBuilder'; 
import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapater from 'enzyme-adapter-react-16';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

configure({adapter: new Adapater()});

describe('<BurgerBuilder />',()=>{
let wrapper;
beforeEach(()=>{
  wrapper = shallow(<BurgerBuilder onInitIngredients ={()=>{}}/>);
});

it('should render <BuildControl /> when receiving Ingredients',()=>{
  wrapper.setProps({ings: {salad:0}});
  expect(wrapper.find(BuildControls)).toHaveLength(1);
});

})