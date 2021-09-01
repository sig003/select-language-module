import { useState } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import LanguageDialog from './components/LanguageDialog';
import './style.css';
import { useTranslation } from "react-i18next";

function App() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickLanguageOpen = () => {
		setLanguageOpen(true);
	};
	const handleClickLanguageClose = () => {
		setLanguageOpen(false);
	};

  return (
	<div className='container'>
		<div className="language_box" onClick={handleClickLanguageOpen}>
			<LanguageIcon fontSize="small"/>
			<Box mr={1} />
			{t('language')}
			<ExpandMoreIcon fontSize="small"/>
		</div>
		<div className="language">
			<div>{t('login')}</div>
			<div>{t('logout')}</div>
			<div>{t('selectedItem')}</div>
			<div>{t('mouse')}</div>
			<div>{t('keyboard')}</div>
		</div>
		<LanguageDialog
				languageOpen={languageOpen}
				handleClickLanguageClose={handleClickLanguageClose}
			/>
	</div>
  );
}

export default App;
