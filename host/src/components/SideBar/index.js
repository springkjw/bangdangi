import React from 'react';
import {useHistory} from 'react-router-dom';
import {
  PlusOutlined,
  MessageOutlined,
  HomeOutlined,
  SettingOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import * as style from './style';

export default () => {
  const history = useHistory();

  return (
    <style.Container>
      <style.Item onClick={() => history.push('/room/register')}>
        <PlusOutlined />
      </style.Item>

      <style.Item onClick={() => history.push('/')}>
        <HomeOutlined />
      </style.Item>

      <style.Item>
        <MessageOutlined />
      </style.Item>

      <style.Item>
        <NotificationOutlined />
      </style.Item>

      <style.Item onClick={() => history.push('/user/profile')}>
        <SettingOutlined />
      </style.Item>
    </style.Container>
  );
};
