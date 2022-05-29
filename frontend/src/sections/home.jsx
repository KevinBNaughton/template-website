import {
  Link
} from 'react-router-dom';
import { useCookies } from "react-cookie";
import React, { useState, useEffect, useImperativeHandle } from 'react';
import { SectionLayout } from '@bcrace2445/react-components'

class Home extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }

  render() {
      return (
          <SectionLayout>
              <span>Home</span>
          </SectionLayout>       
      )
  }
}

export { Home };