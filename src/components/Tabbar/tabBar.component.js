import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';

//constants

//icons
import HomeIcon from '../../assets/svg/home.icon';
import TrendingIcon from '../../assets/svg/trending.icon';
import SearchIcon from '../../assets/svg/search.icon';
import ProfileIcon from '../../assets/svg/profile.icon';
// import HomeIcon from '../../assets/svg/home-icon';
// import OrdersIcon from '../../assets/svg/orders-icon';
// import BagIcon from '../../assets/svg/bag-icon';
// import CategoriesIcon from '../../assets/svg/categories-icon';

// import { RelativeWidth, RelativeHeight, RelativeFontSize, Colors } from '@uiKit';

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#6C63FF" }} >
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;
          let Icon = null;
          let title = route.name;

          switch (title) {
            case "Home":
              Icon = HomeIcon;
              break;
            case "Trending":
              Icon = TrendingIcon;
              break;
            case "Search":
              Icon = SearchIcon;
              break;
            case "Profile":
              Icon = ProfileIcon;
              break;
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.button}
            >
              {Icon && <Icon fill={"white"} width={(20)} height={(20)} />}
              <Text style={styles.title} >{title}</Text>
              {isFocused ? <View style={styles.line} /> : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: "#ffff",
    fontWeight: '500',
    fontSize: 9,
    lineHeight: 12,
    marginTop: 5
  },
  red: {
    backgroundColor: "red"
  },
  line: {
    width: 30,
    height: 1,
    borderTopWidth: 2,
    borderColor: "#fff"
  }
})