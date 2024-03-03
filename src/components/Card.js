import React from 'react';

import Header  from './Header';
import Body from './Body';

export const Card = ({ commentObject }) => {
  return (
    <>
        <Header profileImg={commentObject.profileImg} userName={commentObject.userName} />

        <Body comment={commentObject.comment}/>
    </>

  )
}
