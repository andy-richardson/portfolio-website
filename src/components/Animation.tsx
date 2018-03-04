// tslint:disable no-unused-expression
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeIn {
    animation: fadeIn 300ms ease-in forwards;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .fadeOut {
    animation: fadeOut 300ms ease-in forwards;
  }
`;
