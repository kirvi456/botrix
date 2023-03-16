import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FeedIcon from '@mui/icons-material/Feed';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

interface Pagina {
    titulo: string;
    icono: any;
    url: string;
}

interface PaginasPorRol {
    ADMIN: Pagina[];
    DIGITADOR: Pagina[];
}

export const listaPaginas: PaginasPorRol = {
    ADMIN: [
        {
            titulo: 'Home',
            icono: <HomeIcon />,
            url: '/home',
        },
        {
            titulo: 'Shop',
            icono: <HorizontalSplitIcon />,
            url: '/shop',
        },
    ],
    DIGITADOR: [
        {
            titulo: 'Inicio',
            icono: <HomeIcon />,
            url: '/digitadorhome',
        },
        {
            titulo: 'Iniciar Formulario',
            icono: <FeedIcon />,
            url: '/iniciarform',
        },
    ],
};
