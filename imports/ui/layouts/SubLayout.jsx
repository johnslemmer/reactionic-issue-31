import React from 'react';
import { IonSubHeaderBar } from 'reactionic';

const SubLayout = (props) => (
  <div>
    <IonSubHeaderBar>
      <div className="title">subheader title</div>
    </IonSubHeaderBar>
    {props.children}
  </div>
);

SubLayout.propTypes = {
  children: React.PropTypes.element, // matched child route component
};

export default SubLayout;
