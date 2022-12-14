import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurentCards from "./RestaurentCards";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id]{
        ...,
        restaurant[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurant(data?.restaurant);
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurentCards */}
        {restaurant?.map((restro) => (
          <RestaurentCards
            key={restro._id}
            id={restro._id}
            imgUrl={restro.image}
            title={restro.name}
            rating={restro.rating}
            genre={restro.type?.name}
            address={restro.address}
            short_description={restro.short_description}
            dishes={restro.dishes}
            long={restro.long}
            lat={restro.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
