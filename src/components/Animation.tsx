import { injectGlobal } from 'styled-components';

injectGlobal`
  .slide-in-left {
    transform: translateX(-100vw);
  }

  .slide-in-left-enter-active {
    transform: translateX(0);
  }

  .fade-in {
    opacity: 0;
    transition: opacity 600ms ease-in;

    &.active {
      opacity: 1;
    }
  }
`;
