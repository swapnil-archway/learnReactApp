import { StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-deck-swiper";
import { Card } from "../../components/Card";
import { Screen } from "../../ui";
import { getCardList } from "../../services/api";
import photoCards from "../../constants/photoCards";

const Home = () => {
  const useSwiper = useRef(null).current;
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getCardList();
      setData(result?.data?.data);
    }
    fetchData();
  }, []);

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
        // cardHorizontalMargin={0}
        cardVerticalMargin={10}
        showSecondCard
        animateOverlayLabelsOpacity
      />
    </Screen>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
