import React, { PureComponent } from 'react';
import { List, Card } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import AvatarList from '@/components/AvatarList';
import stylesProjects from '../../List/Projects.less';

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
