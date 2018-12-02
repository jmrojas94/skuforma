import React from 'react';
import { Appbar } from 'react-native-paper';
import { Styles } from './styles';


const Header = ({
    navigation, title, showSKUAdd, showAccountAdd, onBeforeBack, showMenu, showBack, showSearch,
}) => (
      <Appbar.Header>
        {
          showBack ?
          <Appbar.BackAction
            onPress={() => navigation.goBack()}
          />
          : null
        }
        <Appbar.Content
          title={title}
        />
        {
          showSKUAdd ?
          <Appbar.Action icon="add" onPress={() => navigation.navigate('SKUForm')} />
          : null
        }
        {
          showAccountAdd ?
          <Appbar.Action icon="add" onPress={() => navigation.navigate('AccountForm')} />
          : null
        }
        {
          showSearch ?
          <Appbar.Action icon="search" onPress={() => {}} />
          : null
        }
      </Appbar.Header>
);

export { Header };
