/* @flow */

import React from 'react';
import { BrandImageWrapper, BrandImage } from '../../Style/BrandStyle';

import GlintsBlack from '../../../assets/image/glints-logo-black.svg';
import GlintsWhite from '../../../assets/image/glints-logo-white.svg';

const Brand = (props: Props) => {
  const {
    asset,
    className,
    ...defaultProps
  } = props;

  let srcAsset = '';

  if (asset === 'glints-black') {
    srcAsset = GlintsBlack;
  } else if (asset === 'glints-white') {
    srcAsset = GlintsWhite;
  } else {
    srcAsset = asset;
  }

  return (
    <BrandImageWrapper className={className} {...defaultProps}>
      <BrandImage src={srcAsset} />
    </BrandImageWrapper>
  );
};

type Props = {
  asset: string,
  className: string,
}

export default Brand;