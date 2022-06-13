import { Button, Container, Menu } from '@mantine/core';
import React from 'react';

export default function NavBar() {
    return( 
        <Menu>
            <Container>
                <Menu.Item>
                    <img src="assets/logo.png" alt="logo"/>
                    Reactivities
                </Menu.Item>
                <Menu.Item>
                    Activities
                </Menu.Item>
                <Menu.Item>
                    <Button name='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}