import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

function TextInputRoot  (props: TextInputRootProsp) {
    return (
        <div className="flex items-center gap-3 h-12 py-4 px-3 rounder bg-gray-800 w-full focus-withing:ring-2 ring-cyan-300">
            {props.children}
        </div>
        //h-12 = 48px => 12 x 4
    )
}


TextInputRoot.displayName = 'TextInput.Root'
export interface TextInputRootProsp {
    children: ReactNode;
}



export interface TextInputIconProps {
    children: ReactNode,
}


function TextInputIcon(props: TextInputIconProps ) { /*icon*/
    return (
        <slot className="w-6 h-6 text-gray-400"> 
        {props.children}
        </slot>
    )
}

//forcar o componente de envelope de email na tela
//force email Envelope component on screen 
TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input 
            className="bg-transparent flex-1 bg-gray-100 text-gray-500 text-xs placeholder:text-gray-400 outline-none"
           {...props}
        />
    )
}
 
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot, 
    Input: TextInputInput,
    Icon: TextInputIcon,
}