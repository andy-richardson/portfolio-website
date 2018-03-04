import { injectGlobal } from 'styled-components';

injectGlobal`
  .slide-in-left {
    transition: transform 600ms ease;
    transform: translateX(100vw);

    &.active {
      transform: translateX(0);
    }
  }

  .fade-in {
    opacity: 0;
    transition: opacity 600ms ease;

    &.active {
      opacity: 1;
    }
  }
`;
