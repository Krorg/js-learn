import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { App } from '@/app/App';
import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер не найден. Не удалось монтировать React приложение.'
    );
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);

// render(
//     <BrowserRouter>
//         <StoreProvider>
//             <ErrorBoundary>
//                 <ThemeProvider>
//                     <App />
//                 </ThemeProvider>
//             </ErrorBoundary>
//         </StoreProvider>
//     </BrowserRouter>,
//     document.getElementById('root')
// );
