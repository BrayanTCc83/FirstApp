import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';

import { DesignProvider } from "../../src/provider/designProvider"
import { STYLE_DEFINITIONS } from "../../global/definitions"

import Button from "../../src/components/button";
import TextView from "../../src/components/textView";
import Input from "../../src/components/input";
import Message from "../../src/components/message";
import SwitchButton from "../../src/components/switchButton";
import Icon from "../../src/components/icon";
import ChatSelector from "../../src/components/chatSelector";
import Dropdown from "../../src/components/dropdown";
import ViewContainer from "../../src/components/viewContainer";

const DEFAULT_PROVIDER_PROPS = {
    theme : STYLE_DEFINITIONS.DARK_MODE,
    mode : STYLE_DEFINITIONS.GREEN_THEME
}

const designRender = ( ui, { providerProps } ) => {
    return renderer.create(
        <DesignProvider {...providerProps} >
            {ui}
        </DesignProvider>
    )
}

it('Button tested with design provider', () => {
    const BUTTON_TEST = designRender( <Button/> , DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( BUTTON_TEST ).toMatchSnapshot();
});

it('Text tested with design provider', () => {
    const TEXT_VIEW_TEST = designRender( <TextView/>, DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( TEXT_VIEW_TEST ).toMatchSnapshot();
});

it('View container tested with design provider', () => {
    const VIEW_CONTAINER_TEST =  designRender( <ViewContainer/>, DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( VIEW_CONTAINER_TEST ).toMatchSnapshot();
});

it('Input tested with desing provider', () => {
    const INPUT_TEST = designRender( <Input/>, DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( INPUT_TEST ).toMatchSnapshot();
});

it('Message component tested with desing provider', () => {
    const MESSAGE_COMPONENT_TEST = designRender( <Message/>, DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( MESSAGE_COMPONENT_TEST ).toMatchSnapshot();
});

it('Switch button tested with desing provider', () => {
    const SWITCH_BUTTON_TEST = designRender( <SwitchButton/>, DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( SWITCH_BUTTON_TEST ).toMatchSnapshot();
});

it('Icon component tested with desing provider', () => {
    const ICON_COMPONENT_TEST = designRender( <Icon/>, DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( ICON_COMPONENT_TEST ).toMatchSnapshot();
});

it('Chat selector tested with desing provider', () => {
    const CHAR_SELECTOR_TEST = designRender( <ChatSelector/>, DEFAULT_PROVIDER_PROPS ).toJSON();
    expect( CHAR_SELECTOR_TEST ).toMatchSnapshot();
});
