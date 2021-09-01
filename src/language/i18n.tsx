import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; 
import langEn from './lang.en.json';
import langKo from './lang.ko.json'; 

const resource =  {    
  'en': {        
         translation: langEn    
   },    
  'ko': {        
         translation: langKo    
   }
};

i18n    
  .use(initReactI18next)    
  .init({        
         resources: resource,        
         lng: 'ko',        
         fallbackLng: 'ko',        
         debug: false,        
         interpolation: {            
                 escapeValue: false        
         }        
});
 
export default i18n;