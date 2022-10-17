import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProsp } from './TextInput';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root, /*or use Input*/
    args: { 
        /*placeholder: 'Type your e-mail address'*/
        /* type: 'email' property for e-mail */

        children: [
            <TextInput.Icon>
                <Envelope />                
            </TextInput.Icon>,     
            <TextInput.Input  placeholder="Type your e-mail address" />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }        
        },
    }

} as Meta<TextInputRootProsp >

export const Default: StoryObj<TextInputRootProsp> = {}


export const WithoutIcon: StoryObj<TextInputRootProsp> = {
    args: {
        children: <TextInput.Input placeholder="Type your e-email address" />
    }
}
