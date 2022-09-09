import React from 'react';
import Icon1 from '../../images/2.png';
import Icon2 from '../../images/3.png';
import Icon3 from '../../images/4.png';
import Icon4 from '../../images/5.png';
import Icon5 from '../../images/6.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Market Watcher</ServicesH2>
          <ServicesP>
            A brand new price-tracking tool.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Crypto News</ServicesH2>
          <ServicesP>
            Get the latest news about cryptos.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Airdrop</ServicesH2>
          <ServicesP>
            Don't miss more airdrop opportunities.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Bridge</ServicesH2>
          <ServicesP>
            Simple and safe bridge for EVM chains/L2.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Expect More</ServicesH2>
          <ServicesP>
            We're working on other interesting things to add.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
