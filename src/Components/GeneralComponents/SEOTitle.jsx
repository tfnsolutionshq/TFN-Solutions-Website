import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SEOTitle = ({ title }) => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = title ? `${t(title)} | TFN` : 'TFN';
    
    // Update meta description based on route
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        title ? `${t(title)} - TFN Services` : 'TFN - Technology Solutions Provider'
      );
    }
  }, [location.pathname, title, t]);

  return null;
};

export default SEOTitle;