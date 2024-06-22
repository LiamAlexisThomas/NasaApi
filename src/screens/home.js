import React from "react";
import Layout from "./layout";
import Header from "../components/header";
import ImageDay from "../components/imageDay";
import { useEffect, useState } from "react";
import fech from "../utility/requests";
import { format, sub } from "date-fns";
import { FlatList, View } from "react-native";
import ImagesDaysView from "../components/imagesDays";
import Textwhite from "../components/textWhite";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default Home = ({ navigation }) => {
  const [imageDay, setImageDay] = useState({});
  const [imagesDays, setImagesDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const res = await fech("");
        setImageDay(res);
      } catch (er) {
        console.log(er);
      }
    };

    const loadLastImages = async () => {
      try {
        const date = new Date();
        const actualDate = format(date, "yyyy-MM-dd");
        const lastDate = format(
          sub(date, { days: 7 }),
          "yyyy-MM-dd"
        );

        const last7img = await fech(
          `&start_date=${lastDate}&end_date=${actualDate}`
        );
        setImagesDays(last7img);
      } catch (er) {
        console.error(er);
      } finally {
        setIsLoading(false);
      }
    };
    loadImage().catch(null);
    loadLastImages().catch(null);
  }, []);

  const handleDetalles = (objImage) => {
    navigation.navigate("Detalles", {
      title: objImage.title,
      url: objImage.url,
      desc: objImage.explanation,
      date: objImage.date,
    });
  };

  return (
    <Layout>
      <Header texto="Descubre" />
      {isLoading ? (
        <ActivityIndicator style={{marginTop: 20, alignItems: "center", flex: 1, justifyContent: "center"}}
          animating={true}
          color={MD2Colors.red800}
          size="large"
        />
      ) : (
        <>
          <ImageDay Data={imageDay} onPres={() => handleDetalles(imageDay)} />
          <Textwhite texto="Imagenes de los ultimos 7 dias" />
          <FlatList
            style={{ marginVertical: 5 }}
            data={imagesDays}
            renderItem={({ item }) => (
              <ImagesDaysView title={item.title} date={item.date} url={item.url} onPres={() => handleDetalles(item)}/>
            )}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ></FlatList>
        </>
      )}
    </Layout>
  );
};
