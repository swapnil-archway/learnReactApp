import { Dimensions, Platform, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-deck-swiper";
import { Card } from "../../components/Card";
import { Screen } from "../../ui";
import { getCardList } from "../../services/api";
import photoCards from "../../constants/photoCards";
const { width } = Dimensions.get("window");
import { useSelector, useDispatch } from "react-redux";
import { newsRequest } from "../../redux/slices";
export const Home = () => {
  const useSwiper = useRef(null).current;
  // const [data, setData] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const { newsList, newsData, newsLoading } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsRequest());
  }, [dispatch]);

  const onSwipedBottomCard = (index) => {
    console.log("test", photoCards.length - 2 <= index);
  };

  const onSwipedTopCard = (index) => {
    setCardIndex(index + 1);
    console.log("test", photoCards.length - 2 <= index);
  };

  return (
    <Screen>
      <Swiper
        ref={useSwiper}
        animateCardOpacity
        containerStyle={styles.container}
        cards={newsList}
        renderCard={(news) => (
          <Card news={news} lastNews={cardIndex === newsList.length - 1} />
        )}
        cardIndex={cardIndex}
        // backgroundColor="white"
        // stackSize={2}
        // infinite
        horizontalSwipe={false}
        cardHorizontalMargin={0}
        cardVerticalMargin={0}
        animateOverlayLabelsOpacity
        showSecondCard={false}
        useViewOverflow={Platform.OS === "ios"}
        swipeBackCard
        // goBackToPreviousCardOnSwipeTop={true}
        // onSwipedBottom={(cardIndex) => onSwipedBottomCard(cardIndex)}
        goBackToPreviousCardOnSwipeBottom
        disableBottomSwipe={cardIndex === 0}
        disableTopSwipe={cardIndex === newsList?.length - 1}
        onSwipedTop={(index) => onSwipedTopCard(index)}
        onSwipedBottom={(index) => setCardIndex(index - 1)}
        overlayOpacityHorizontalThreshold={width / 4}
        stackSize={newsList?.length}
        backgroundColor={"transparent"}
        // outputCardOpacityRangeX={[0.3, 0.5, 1, 0.5, 0.3]}
        onSwiping={(data) => console.log("23", data)}
        cardStyle={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "auto",
          height: "auto",
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
