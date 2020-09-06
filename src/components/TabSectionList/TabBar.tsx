import * as React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  LayoutChangeEvent,
  LayoutRectangle,
  SectionListData,
  ViewStyle,
  Animated,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
const WindowWidth = Dimensions.get('window').width;
import styles from './styles';

interface IProps {
  sections: SectionListData<any>[];
  renderTab: (section: SectionListData<any>) => React.ReactNode;
  tabBarStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  tabBarScrollViewStyle?: StyleProp<ViewStyle>;
  currentIndex: number;
  onPress: (index: number) => void;
}

interface ITabMeasurements {
  left: number;
  right: number;
  width: number;
  height: number;
}

interface ITabsLayoutRectangle {
  [index: number]: ITabMeasurements;
}

export default class TabBar extends React.PureComponent<IProps, any> {
  private scrollView: React.RefObject<ScrollView> = React.createRef();
  private _tabContainerMeasurements!: LayoutRectangle;
  private _tabsMeasurements: ITabsLayoutRectangle = {};

  componentDidUpdate(prevProps: IProps) {
    if (this.props.currentIndex !== prevProps.currentIndex) {
      if (this.scrollView.current) {
        this.scrollView.current.scrollTo({
          x: this.getScrollAmount(),
          animated: true,
        });
      }
    }
  }

  getScrollAmount = () => {
    const {currentIndex} = this.props;
    const position = currentIndex;
    const pageOffset = 0;

    const containerWidth = WindowWidth;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth =
      (nextTabMeasurements && nextTabMeasurements.width) || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    newScrollX -=
      (containerWidth -
        (1 - pageOffset) * tabWidth -
        pageOffset * nextTabWidth) /
      2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    const rightBoundScroll = Math.max(
      this._tabContainerMeasurements.width - containerWidth,
      0,
    );

    newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
    return newScrollX;
  };

  onTabContainerLayout = (e: LayoutChangeEvent) => {
    this._tabContainerMeasurements = e.nativeEvent.layout;
  };

  onTabLayout = (key: number) => (ev: LayoutChangeEvent) => {
    const {x, width, height} = ev.nativeEvent.layout;
    this._tabsMeasurements[key] = {
      left: x,
      right: x + width,
      width,
      height,
    };
  };

  renderTab = (section: SectionListData<any>, key: number) => {
    const {renderTab, onPress, currentIndex} = this.props;
    const isActive: boolean = currentIndex === key;

    return (
      <TouchableOpacity
        onPress={() => onPress(key)}
        key={key}
        onLayout={this.onTabLayout(key)}>
        {renderTab({isActive, ...section})}
      </TouchableOpacity>
    );
  };

  render() {
    const {sections, tabBarStyle, tabBarScrollViewStyle} = this.props;

    return (
      <Animated.View style={[{width: WindowWidth}, tabBarStyle]}>
        <ScrollView
          ref={this.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={tabBarScrollViewStyle}
          contentContainerStyle={styles.tabBarScrollviewContainer}>
          <View
            onLayout={this.onTabContainerLayout}
            style={styles.tabBarContainer}>
            {sections.map(this.renderTab)}
          </View>
        </ScrollView>
      </Animated.View>
    );
  }
}
