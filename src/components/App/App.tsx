import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import countapi from 'countapi-js';
//const visitantes =  Number(countapi.visits().then((result) => result.value))
import './App.scss';
import HomeView from '../../views/HomeView';
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import LicenseView from '../../views/LicenseView';
import UserRegistrationView from '../../views/UserRegistrationView';
import ReleaseNotesView from '../../views/ReleaseNotesView';
import PrivacyView from '../../views/PrivacyView';

function App() {
  useEffect(() => {
    const disableContextMenu = (event: any) => {
      event.preventDefault();
    };

    // Adicione o ouvinte do evento ao montar o componente
    document.addEventListener('contextmenu', disableContextMenu);

    // Remova o ouvinte do evento ao desmontar o componente
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/*<BrowserRouter>*/}
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cadastre-se" element={<UserRegistrationView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/licenca" element={<LicenseView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/notas-da-versao" element={<ReleaseNotesView />} />
          <Route path="/politica-de-privacidade" element={<PrivacyView />} />
          {/*<Route path="/profile" element={<ProfileView />} />*/}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;