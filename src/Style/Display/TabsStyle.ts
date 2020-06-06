import styled from 'styled-components';

import { SecondaryColor, Greyscale } from '../Colors';
import {
  ScreenSize,
  ETabColourVariant,
  ETabAlignment,
} from '../../Utils/StyleConfig';

interface TabHeader {
  colour: ETabColourVariant;
  alignment: string;
}

export const TabsContainer = styled.div`
  position: relative;

  &.vertical-aries-tabs {
    @media (min-width: ${ScreenSize.tablet}px) {
      display: flex;
      max-width: 100%;
    }
  }
`;

export const TabsHeader = styled.div<TabHeader>`
  position: relative;

  &.vertical-tabs-header {
    @media (min-width: ${ScreenSize.tablet}px) {
      width: 20%;
    }
  }

  .horizontal-tabs-list.colored {
    border-top: 1px solid ${SecondaryColor.lightergrey};
  }

  .vertical-tabs-list {
    @media (min-width: ${ScreenSize.tablet}px) {
      border-right: 1px solid ${SecondaryColor.lightergrey};
      border-bottom: none;
      flex-direction: column;
    }
  }

  ul {
    border-bottom: 1px solid ${SecondaryColor.lightergrey};
    display: flex;
    position: relative;
    white-space: nowrap;
    overflow: auto;
    font-size: 1em;
    padding: 0;
    margin: 0;

    &::-webkit-scrollbar {
      display: none;
    }

    .horizontal-tab.colored {
      min-width: 230px;
      font-size: 16px;
      text-align: center;
      margin: 0;
    }

    .horizontal-tab.colored:hover {
      background-color: ${SecondaryColor.whitesmoke};
      color: ${SecondaryColor.actionblue};
      margin: 0;
    }

    .horizontal-tab.underlined {
      margin: ${({ colour }) =>
        colour === ETabColourVariant.GREY ? '0 15px' : '0 10px'};
    }

    .vertical-tab {
      margin: 0 10px;
      @media (min-width: ${ScreenSize.tablet}px) {
        margin: 0;
      }
    }

    li {
      text-transform: uppercase;
      list-style-type: none;

      &:first-child.horizontal-tab {
        margin-left: 0;
      }

      &:last-child.horizontal-tab {
        margin-right: 0;
      }

      &:first-child.vertical-tab {
        margin-top: 0;
      }

      &:last-child.vertical-tab {
        margin-bottom: 0;
      }

      &.underlined.active.horizontal-tab,
      &.active.vertical-tab {
        border-bottom: ${({ colour }) =>
          colour === ETabColourVariant.GREY
            ? `4px solid ${SecondaryColor.actionblue}`
            : `2px solid ${Greyscale.black}`};

        button {
          font-weight: bold;
          text-transform: uppercase;
          color: ${({ colour }) =>
            colour === ETabColourVariant.GREY
              ? `${SecondaryColor.actionblue}`
              : `${Greyscale.black}`};
        }
        button:hover {
          border: 0;
        }
      }

      &.colored.active.horizontal-tab {
        background-color: ${SecondaryColor.whitesmoke};

        button {
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      &.active.vertical-tab {
        @media (min-width: ${ScreenSize.tablet}px) {
          border-right: ${({ colour }) =>
            colour === ETabColourVariant.GREY
              ? `4px solid ${SecondaryColor.actionblue}`
              : `2px solid ${Greyscale.black}`};
          border-bottom: none;
        }

        button {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }

    svg {
      margin-right: 10px;
      height: 15px;
      width: 15px;
    }

    &:focus {
      outline: none;
    }

    .vertical-tab button {
      text-align: left;
    }

    button {
      width: 100%;
      padding: 20px 0;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      text-transform: uppercase;
      ${({ colour }) => {
        if (colour === ETabColourVariant.GREY) {
          return `
            letter-spacing: 1px;
            font-weight: 500;
            color: ${Greyscale.grey};
          `;
        }
      }};
    }

    button:hover {
      ${({ colour, alignment }) => {
        if (
          colour === ETabColourVariant.GREY &&
          alignment === ETabAlignment.VERTICAL
        ) {
          return `
            color: ${SecondaryColor.actionblue};
            border-bottom: 4px solid rgba(1, 126, 183, 0.5);
            @media (min-width: ${ScreenSize.tablet}px) {
              border-bottom: 0;
              border-right: 4px solid rgba(1, 126, 183, 0.5);
            }
          `;
        } else if (
          colour === ETabColourVariant.GREY &&
          alignment === ETabAlignment.HORIZONTAL
        ) {
          return `
            color: ${SecondaryColor.actionblue};
            border-bottom: 4px solid rgba(1, 126, 183, 0.5);
          `;
        }
      }};
    }
  }

  @media ${`(min-width: ${ScreenSize.desktopS}px)`} {
    li {
      margin: 0 15px;
    }
  }
`;

export const TabsContent = styled.div`
  position: relative;
  outline: none;
  @media (min-width: ${ScreenSize.tablet}px) {
    &.tabs-item-vertical {
      margin-left: 60px;
    }
  }
`;

export const TabsBody = styled.div`
  position: relative;
  padding-top: 1.2em;

  &:focus {
    outline: none;
  }

  &:focus > ${TabsContent} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
