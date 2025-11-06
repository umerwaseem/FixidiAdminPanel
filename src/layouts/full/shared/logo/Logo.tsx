import { FC } from 'react';
import { useSelector } from 'src/store/Store';
import { Link } from 'react-router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/dark-rtl-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLight } from 'src/assets/images/logos/light-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/light-logo-rtl.svg';
import { styled } from '@mui/material';
import { AppState } from 'src/store/Store';
import { ReactComponent as FixidiLogo } from 'src/components/Administration/fixidi logo svg 1 (1).svg';

const Logo: FC = () => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '60px' : '220px', // increased width
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  }));

  const logoStyle = {
    width: customizer.isCollapse ? '40px' : '180px', // control image size
    height: '40px', // maintain aspect ratio
  };

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled to="/">
        {customizer.activeMode === 'dark' ? (
          <LogoLight  style={logoStyle} />
        ) : (
          <FixidiLogo  style={logoStyle} />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled to="/">
      {customizer.activeMode === 'dark' ? (
        <LogoDarkRTL  style={logoStyle} />
      ) : (
        <LogoLightRTL  style={logoStyle} />
      )}
    </LinkStyled>
  );
};


export default Logo;
