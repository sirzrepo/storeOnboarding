import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';
import './App.css';

import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify';
import { LandingPageDesign } from './pages/landingPage';
import { OnboardingSteps } from './pages/onboardingSteps';
import { StoreView } from './pages/store';
import { SignupForm } from './pages/auth';
import { BrandDashboard } from './pages/dashboard';
import { LoadingPage } from './features/loadingPage';

function App() {
  // Helper component to conditionally render Navbar and Footer
  function Layout() {

    return (
      <>
        <div 
          className={`
            bg-[#FAFAFA] 
            min-h-screen 
            transition-all 
            duration-300
          `}
        >
          <div className="">
            <Routes>
              <Route path="/loading" element={
                  <LoadingPage />
              } />
              <Route path="/" element={
                  <LandingPageDesign />
              } />
              <Route path="/onboarding" element={
                  <OnboardingSteps />
              } />
              <Route path="/store" element={
                  <StoreView onDownload={() => {}} />
              } />
              <Route path="/auth" element={
                  <SignupForm onBack={() => {}} />
              } />
              <Route path="/dashboard" element={
                  <BrandDashboard />
              } />
            </Routes>
          </div>
        </div>
      </>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <Layout />
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
