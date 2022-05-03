import { Button } from '@chakra-ui/react';
import React,{useState} from 'react';
import {ThemeState} from '../../Context/ThemeProvider'

export default function ToggleTheme() {
    const {theme,setTheme}=ThemeState();
    const [toggle,setToggle]=useState(false);
    return (
        <Button
                onClick={() => {
                  setToggle(!toggle);
                  setTheme(toggle?'dark':'light');
                }}
                marginRight="2px"
                size="xs"
                textColor={theme==='dark'&&"black"}
              >
               {theme==='light'?'dark':'light'}
              </Button>
    )
}
