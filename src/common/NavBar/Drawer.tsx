import React from 'react';
import {
    SwipeableDrawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { listaPaginas } from './LinksList';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LabelIcon from '@mui/icons-material/Label';
type DrawerProps = {
    open: boolean;
    rol: string;
    handleOpenChange: () => void;
};

export const Drawer: React.FC<DrawerProps> = ({ open, rol, handleOpenChange }) => {
    // Se obtienen todos los roles a los que se les asignaron paginas
    const listaRoles = Object.keys(listaPaginas) as string[];

    // Se revisa si el rol que se esta pasando como prop tiene paginas definidas
    const lista = listaRoles.includes(rol)
        ? listaPaginas[rol as 'ADMIN']
        : [
              {
                  titulo: 'Home',
                  icono: <HomeIcon />,
                  url: '/home',
              },
              {
                  titulo: 'Shop',
                  icono: <ShoppingCartIcon />,
                  url: '/shop',
              },
              {
                  titulo: 'Collection 1',
                  icono: <LabelIcon />,
                  url: '/matrix1',
              },
              {
                  titulo: 'Collection 2',
                  icono: <LabelIcon />,
                  url: '/matrix2',
              },
              {
                  titulo: 'Collection 3',
                  icono: <LabelIcon />,
                  url: '/matrix3',
              },
              {
                  titulo: 'Collection 4',
                  icono: <LabelIcon />,
                  url: '/matrix4',
              },
              {
                  titulo: 'Collection 5',
                  icono: <LabelIcon />,
                  url: '/matrix5',
              },
          ];

    let navigate = useNavigate();

    return (
        <SwipeableDrawer
            open={open}
            onClose={handleOpenChange}
            onOpen={handleOpenChange}
        >
            <Box
                sx={{ minWidth: '250px' }}
                onClick={handleOpenChange}
            >
                {lista.map(({ titulo, icono, url }, index) => (
                    <List
                        key={'navItem' + index}
                        onClick={() => navigate(url, { replace: false })}
                    >
                        <ListItem
                            key={titulo}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemIcon>{icono}</ListItemIcon>
                                <ListItemText primary={titulo} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                ))}
            </Box>
        </SwipeableDrawer>
    );
};
