import { StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-deck-swiper";
import { Card } from "../../components/Card";
import { Screen } from "../../ui";
import { getCardList } from "../../services/api";
import photoCards from "../../constants/photoCards";

export const Home = () => {
  const useSwiper = useRef(null).current;
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getCardList();
      setData(result?.data?.data);
    }
    fetchData();
  }, []);

  const onSwipedBottomCard = (index) => {
    console.log("test", photoCards.length - 2 <= index);
  };

  return (
    <Screen>
      <Swiper
        ref={useSwiper}
        animateCardOpacity
        containerStyle={styles.container}
        cards={photoCards}
        renderCard={(card) => <Card card={card} />}
        cardIndex={0}
        backgroundColor="white"
        stackSize={2}
        infinite
        horizontalSwipe={false}
        cardHorizontalMargin={0}
        cardVerticalMargin={0}
        animateOverlayLabelsOpacity
        // swipeBackCard
        swipeTop
        // goBackToPreviousCardOnSwipeTop={true}
        // goBackToPreviousCardOnSwipeBottom={true}
        onSwipedBottom={(cardIndex) => onSwipedBottomCard(cardIndex)}
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
