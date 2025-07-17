import { useState, useEffect } from 'react';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  // Check if user has already made a choice
  useEffect(() => {
    const consent = getCookie('site_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      const savedPrefs = getCookie('cookie_preferences');
      if (savedPrefs) {
        try {
          setCookiePreferences(JSON.parse(savedPrefs));
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, []);

  // Helper functions for cookie management
  const setCookie = (name, value, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const handleToggle = (cookieType) => {
    if (cookieType !== 'necessary') {
      setCookiePreferences(prev => ({
        ...prev,
        [cookieType]: !prev[cookieType]
      }));
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(allAccepted);
    setCookie('site_cookie_consent', 'true');
    setCookie('cookie_preferences', JSON.stringify(allAccepted));
    setShowBanner(false);
    console.log("All cookies accepted");
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookiePreferences(essentialOnly);
    setCookie('site_cookie_consent', 'true');
    setCookie('cookie_preferences', JSON.stringify(essentialOnly));
    setShowBanner(false);
    console.log("Non-essential cookies declined");
  };

  const handleSavePreferences = () => {
    setCookie('site_cookie_consent', 'true');
    setCookie('cookie_preferences', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowSettings(false);
    console.log("Saved preferences:", cookiePreferences);
  };

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const handleCancel = () => {
    setShowSettings(false);
  };

  if (!showBanner) {
    return null;
  }

  const bannerStyle = {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#2C1531',
    color: '#f9fafb',
    padding: '24px',
    zIndex: 9999,
    borderTop: '2px solid #561975',
    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
    minHeight: '80px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const mainContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px'
  };

  const textStyle = {
    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '1.5'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const buttonBaseStyle = {
    padding: '10px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    minWidth: '120px'
  };

  const primaryButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#D200AB',
    color: 'white'
  };

  const secondaryButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #4b5563'
  };

  const linkStyle = {
    color: '#60a5fa',
    textDecoration: 'underline',
    marginLeft: '4px',
    cursor: 'pointer'
  };

  const settingsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const settingItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px'
  };

  const settingInfoStyle = {
    flex: 1
  };

  const settingTitleStyle = {
    fontWeight: '500',
    fontSize: '14px',
    marginBottom: '4px'
  };

  const settingDescStyle = {
    fontSize: '12px',
    color: '#9ca3af'
  };

  const toggleStyle = {
    width: '40px',
    height: '24px',
    borderRadius: '12px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  };

  const toggleKnobStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'white',
    position: 'absolute',
    top: '2px',
    transition: 'transform 0.2s ease'
  };

  const buttonActionsStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    paddingTop: '8px'
  };

  // Responsive styles
  const mediaQuery = window.innerWidth >= 768;
  if (mediaQuery) {
    mainContentStyle.flexDirection = 'row';
    textStyle.textAlign = 'left';
    buttonContainerStyle.flexDirection = 'row';
  }

  return (
    <div style={bannerStyle}>
      <div style={containerStyle}>
        {!showSettings ? (
          <div style={mainContentStyle}>
            <div style={textStyle}>
              We use cookies to enhance your experience. Some are essential, while others help us improve 
              our services. You can customize your preferences or accept all cookies.
              <span 
                style={linkStyle}
                onClick={() => alert('This would link to your privacy policy')}
              >
                Learn more
              </span>
            </div>
            
            <div style={buttonContainerStyle}>
              <button
                onClick={handleShowSettings}
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {e.target.style.backgroundColor = '#561975'
                    e.target.style.color='#fff'
                }}
                onMouseLeave={(e) => {e.target.style.backgroundColor = '#fff'
                    e.target.style.color ='#333'
                }}
              >
                Customize
              </button>
              <button
                onClick={handleRejectNonEssential}
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {e.target.style.backgroundColor = '#561975'
                    e.target.style.color='#fff'
                }}
                onMouseLeave={(e) => {e.target.style.backgroundColor = '#fff'
                    e.target.style.color ='#333'
                }}
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAcceptAll}
                style={primaryButtonStyle}
                onMouseEnter={(e) => {e.target.style.backgroundColor = '#561975'
                    e.target.style.color='#fff'
                }}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D200AB'}
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div style={settingsStyle}>
            <h3 style={{ fontWeight: '500', fontSize: '18px', margin: 0 }}>Cookie Preferences</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Necessary Cookies */}
              <div style={settingItemStyle}>
                <div style={settingInfoStyle}>
                  <h4 style={settingTitleStyle}>Necessary Cookies</h4>
                  <p style={settingDescStyle}>
                    Essential for the website to function properly.
                  </p>
                </div>
                <div style={{
                  ...toggleStyle,
                  backgroundColor: '#D200AB',
                  cursor: 'not-allowed',
                  opacity: 0.7
                }}>
                  <span style={{
                    ...toggleKnobStyle,
                    transform: 'translateX(16px)'
                  }}></span>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div style={settingItemStyle}>
                <div style={settingInfoStyle}>
                  <h4 style={settingTitleStyle}>Analytics Cookies</h4>
                  <p style={settingDescStyle}>
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div 
                  style={{
                    ...toggleStyle,
                    backgroundColor: cookiePreferences.analytics ? '#D200AB' : '#4b5563'
                  }}
                  onClick={() => handleToggle('analytics')}
                >
                  <span style={{
                    ...toggleKnobStyle,
                    transform: cookiePreferences.analytics ? 'translateX(16px)' : 'translateX(0px)'
                  }}></span>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div style={settingItemStyle}>
                <div style={settingInfoStyle}>
                  <h4 style={settingTitleStyle}>Marketing Cookies</h4>
                  <p style={settingDescStyle}>
                    Used to track visitors across websites for advertising purposes.
                  </p>
                </div>
                <div 
                  style={{
                    ...toggleStyle,
                    backgroundColor: cookiePreferences.marketing ? '#D200AB' : '#4b5563'
                  }}
                  onClick={() => handleToggle('marketing')}
                >
                  <span style={{
                    ...toggleKnobStyle,
                    transform: cookiePreferences.marketing ? 'translateX(16px)' : 'translateX(0px)'
                  }}></span>
                </div>
              </div>

              {/* Preferences Cookies */}
              <div style={settingItemStyle}>
                <div style={settingInfoStyle}>
                  <h4 style={settingTitleStyle}>Preference Cookies</h4>
                  <p style={settingDescStyle}>
                    Allow the website to remember choices you make.
                  </p>
                </div>
                <div 
                  style={{
                    ...toggleStyle,
                    backgroundColor: cookiePreferences.preferences ? '#D200AB' : '#4b5563'
                  }}
                  onClick={() => handleToggle('preferences')}
                >
                  <span style={{
                    ...toggleKnobStyle,
                    transform: cookiePreferences.preferences ? 'translateX(16px)' : 'translateX(0px)'
                  }}></span>
                </div>
              </div>
            </div>

            <div style={buttonActionsStyle}>
              <button
                onClick={handleCancel}
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {e.target.style.backgroundColor = '#561975'
                    e.target.style.color='#fff'
                }}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                style={primaryButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#561975'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D200AB'}
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;