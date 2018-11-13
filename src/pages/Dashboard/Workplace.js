import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import Link from 'umi/link';
import { Row, Col, Card, List, Avatar } from 'antd';

import { Radar } from '@/components/Charts';
import EditableLinkGroup from '@/components/EditableLinkGroup';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './Workplace.less';

class Workplace extends PureComponent {
  componentDidMount() {
  
  }

  componentWillUnmount() {
  
  }
  render() {
    return (
      <PageHeaderWrapper></PageHeaderWrapper>
    );
  }
}

export default Workplace;
