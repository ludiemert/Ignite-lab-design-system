import { Checkbox } from '@radix-ui/react-checkbox';
import { FormEvent, useState } from "react";
import axios from 'axios';
import { Envelope } from 'phosphor-react';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';


export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    async function handleSignIn(event: FormEvent) {
        event.preventDefault()

        await axios.post('/sessions', {
          email: 'lucianadiemert@gmail.com',
          password: '123456789',
        })

        setIsUserSignedIn(true)
        }

    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">

    <header className="flex flex-col items-center w-full max-w-sm mt-10">
      <Logo />
    
      <Heading size="lg"> Ignite Lab </Heading>

      <Text size="lg" className="text-gray-400 mt-1 "> 
      Log in and start using!
      </Text>      
      </header>

      <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        { isUserSignedIn && <Text>Login completed!</Text> }

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">E-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
              </TextInput.Icon> 

              <TextInput.Input type="email" id="email" placeholder="Enter your e-mail" />  
          </TextInput.Root>

        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope /> 
              </TextInput.Icon> 

              <TextInput.Input type="password" id="password" placeholder="**********" />  
          </TextInput.Root>

        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Remember  me for 30 days</Text>
        </label>

        <Button type="submit" className="mt-4">Open the platform</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
        <a href="" className="text-gray-400 underline  hover:text-gray-200">Forgot your password?</a>
        </Text>
        <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-gray-200">Don’t have an account? Create one now</a>
        </Text>
        
      </footer>
    </div>
   
    )
}