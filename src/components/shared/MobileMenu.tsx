"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {Divider} from "@mui/material";
import {HeaderData, DownloadApps} from "@/utils/uiData";
import Image from 'next/image'
import Link from 'next/link'

const drawerWidth = 240;
type Anchor = 'top' | 'left' | 'bottom' | 'right';
const MobileMenu = () => {
    const { height, width } = useWindowDimensions();
    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
});

    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            >
            <List>
                {HeaderData.map((header, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Link href={header.path} className={"font-jost text-[17px] w-full"} key={index}>{header.name}</Link>
                        </ListItemButton>
                    </ListItem>
                    ))}
            </List>
            <Divider />
            <List>
                {
                   DownloadApps.map((apps, i) => {
                       return (
                           <Link href={apps.link} className={"font-jost text-[17px]"} key={i}>
                               <Image src={apps.image} alt={"App Icons"} className={" m-3"} />
                           </Link>
                           )
                   })}
            </List>
        </Box>
        );
    console.log("width", width)
    return (
        <div className={"lg:hidden"}>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    {
                    width < 1021 &&  <Drawer
//                        variant={"temporary"}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        >
                        {list(anchor)}
                </Drawer>
                    }
                   
                </React.Fragment>
                ))}
        </div>
        );
}

export default MobileMenu