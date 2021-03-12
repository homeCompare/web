import {useTranslation} from '../i18n';

const TranslateComponent = () => {
  const {t} = useTranslation();
  return t('city');
};

export default {
  title: 'Translation',
  component: TranslateComponent,
};

export const Primary = TranslateComponent.bind({});
