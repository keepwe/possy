import React, { PureComponent } from 'react';
import numeral from 'numeral';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, Icon, Avatar, List, Tooltip, Dropdown, Menu } from 'antd';
import TagSelect from '@/components/TagSelect';
import StandardFormRow from '@/components/StandardFormRow';

import { formatWan } from '@/utils/utils';

import styles from './Applications.less';


class FilterCardList extends PureComponent {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className={styles.filterCardList}></div>
    );
  }
}

export default FilterCardList;
