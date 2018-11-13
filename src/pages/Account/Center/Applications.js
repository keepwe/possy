import React, { PureComponent } from 'react';
import { List, Card, Icon, Dropdown, Menu, Avatar, Tooltip } from 'antd';
import numeral from 'numeral';
import { connect } from 'dva';
import { formatWan } from '@/utils/utils';
import stylesApplications from '../../List/Applications.less';

@connect(({ list }) => ({
  list,
}))
class Center extends PureComponent {
  render() {

    return (
       <div></div>
    );
  }
}

export default Center;
