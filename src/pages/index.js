import {memo} from 'react';

import styled from 'styled-components';

import {useTranslation} from '@/shared/i18n';
import Meta from '@/shared/components/Meta';
import {OpenLayout} from '@/shared/components/Layout';
import CircleWithIcon from '@/homepage/CircleWithIcon';
import MessageOnHeader from '@/homepage/MessageOnHeader';

const RootHomePage = styled(OpenLayout).attrs({
  hideSide: true,
})`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  border-bottom: 10px solid #333;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

const ShowFeaturesSection = styled.section`
  margin: ${({theme}) => theme.size(2)} 0;
`;

const FeaturesList = styled.div`
  display: flex;
`;

const FeatureItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  margin: ${({theme}) => theme.size(1)} 0;
`;

const FeatureDescription = styled.p`
  margin: ${({theme}) => theme.size(1)} 0 ${({theme}) => theme.size(2)} 0;
`;

const IndexPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <Meta title={t('homepage_meta_title')} />
      <RootHomePage>
        <MessageOnHeader />

        <ShowFeaturesSection>
          <SectionTitle>{t('homepage_p2_title_h2')}</SectionTitle>
          <p>
            Breathe a sigh of relief every time you tackle a moving to-do.
            From researching your new city with our guides to budgeting with free moving quotes,
            our resources help you every step of the way.
          </p>
          <FeaturesList>
            <FeatureItem>
              <CircleWithIcon icon="CompareIcon" />
              <FeatureTitle>Wide Comparsion</FeatureTitle>
              <FeatureDescription>
                See the difference between the houses you already
                visited in aspect of payment and other.
              </FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <CircleWithIcon icon="EuroIcon" />
              <FeatureTitle>Money wised</FeatureTitle>
              <FeatureDescription>
                We know that everyone is had a badget,
                comparing property tax or building fees might the different sometimes.
              </FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <CircleWithIcon icon="EuroIcon" />
              <FeatureTitle>Money wised</FeatureTitle>
              <FeatureDescription>
                We know that everyone is had a badget,
                comparing property tax or building fees might the different sometimes.
              </FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <CircleWithIcon icon="EuroIcon" />
              <FeatureTitle>Multiple sort options</FeatureTitle>
              <FeatureDescription>
                We know that everyone is had a badget,
                comparing property tax or building fees might the different sometimes.
              </FeatureDescription>
            </FeatureItem>
          </FeaturesList>
        </ShowFeaturesSection>

        <ShowFeaturesSection>
          <SectionTitle>{t('homepage_p2_title_h2')}</SectionTitle>
          <p>
            Breathe a sigh of relief every time you tackle a moving to-do.
            From researching your new city with our guides to budgeting with free moving quotes,
            our resources help you every step of the way.
          </p>
        </ShowFeaturesSection>
      </RootHomePage>
    </>
  );
};

IndexPage.whyDidYouRender = false;

export default memo(IndexPage);
