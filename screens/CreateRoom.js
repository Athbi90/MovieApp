import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import roomStore from "../stores/RoomStore";
import movieStore from "../stores/MovieStore";
import { observer } from "mobx-react";
import DropDownPicker from "react-native-dropdown-picker";

const CreateRoom = ({ navigation }) => {
  const [room, setRoom] = useState({
    name: "",
    movieName: "",
    description: "",
  });
  const MovieList = ({ listedmovie }) => {
    movieList = listedmovie.map((movie) => (
      <DropDownPicker
        items={[
          {
            label: `${movie.name}`,
            value: `${movie.name}`,
          },
        ]}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
      />
    ));
    return movieList;
  };

  const handleChange = (event) => {
    setRoom({ ...room, [event.target.name]: event.target.value });
  };

  return (
    <>
      <View>
        <Text>Create A Room Page</Text>
      </View>
      <View>
        <Text>Enter Room name</Text>
        <TextInput
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Enter Room Name"
        />
        <Text>Choose your movie</Text>
        <MovieList listedmovie={movieStore.movies} />
        <Text>Enter Room description</Text>
        <TextInput
          type="text"
          onChange={handleChange}
          name="description"
          placeholder="Enter Room Name"
        />
        <TouchableOpacity>
          <Text onPress={() => roomStore.CreateRoom(room)}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default observer(CreateRoom);
