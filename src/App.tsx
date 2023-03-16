import { BrowserRouter } from 'react-router-dom';
import { ThemeConfig } from './config/theme.config';
import { AuthProvider } from './connection/context/Connection.provider';
import { NotificationProvider } from './context/Notification.context';
import { URLSProvider } from './context/URLs.context';
import { AppRouter } from './router';

function App() {
    return (
        <ThemeConfig>
            <AuthProvider>
                <URLSProvider>
                    <NotificationProvider>
                        <BrowserRouter>
                            <AppRouter />
                        </BrowserRouter>
                    </NotificationProvider>
                </URLSProvider>
            </AuthProvider>
        </ThemeConfig>
    );
}

export default App;
