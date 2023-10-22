import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

export default function UserListScreen() {
  return (
    <SafeAreaView className=" flex-1">
      <View className="w-[100%] justify-center items-center p-6 h-full">
        <View className="  justify-between p-5 w-full flex flex-row items-center">
          <View className="flex flex-row items-center space-x-2  w-[44px] h-[44px] justify-center">
            <FontAwesome name="arrow-left" size={26} color="#F29FBC" />
          </View>
          <View className="">
            <Text className="text-[14px] font-bold text-3xl">Best Tacos</Text>
          </View>
          <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
            <FontAwesome name="edit" size={26} color="#F29FBC" />
          </View>
        </View>

        <View className="items-center w-4/5 gap-1">
          <View className="w-3/4 ">
            <Text className="text-[16px] font-light underline">
              San Antonio, TX
            </Text>
          </View>
          <View className=" w-3/4">
            <Text>
              Culpa excepteur proident duis in enim.Minim ullamco mollit ex sit
              aute eiusmod dolore exercitation ullamco.
            </Text>
          </View>
        </View>

        <View className="flex flex-row w-4/5 justify-center items-center my-2">
          <View className="  w-1/2 flex flex-row items-baseline space-x-2">
            <FontAwesome name="users" size={24} color="#F29FBC" />
            <Text className="text-[18px] font-bold text-sm">20 Followers</Text>
          </View>

          <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center ">
            <FontAwesome name="share-square-o" size={30} color="#F29FBC" />
          </View>
        </View>

        <View className=" w-full p-2 flex-row items-center justify-center space-x-3">
          <View className="flex-row items-center bg-white w-4/5 h-[50px] rounded-full relative p-3 shadow">
            <Ionicons
              name="search"
              size={24}
              color="#F29FBC"
              className="absolute top-1/2 left-5  transform -translate-y-1/2"
            />
            <TextInput
              placeholder="Add a new restaurant"
              className="pl-2 pr-3 flex-1 h-[50px] rounded-full"
            />
          </View>
        </View>

        <View className="my-3">
          <Text className="text-[18px] font-bold">10 Restaurants</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
          <View className=" flex flex-col w-full justify-center mt-3 space-y-6">
            <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-row space-x-2  w-4/5 items-center">
                <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
                  <Text className="text-[18px] font-bold">T</Text>
                </View>
                <View>
                  <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
                  <Text className="text-[16px] font-light">
                    324 IH-35, 78108, TX
                  </Text>
                </View>
              </View>
              {/*  Left side content */}
              <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
                <FontAwesome name="remove" size={26} color="#F29FBC" />
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-row space-x-2  w-4/5 items-center">
                <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
                  <Text className="text-[18px] font-bold">T</Text>
                </View>
                <View>
                  <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
                  <Text className="text-[16px] font-light">
                    324 IH-35, 78108, TX
                  </Text>
                </View>
              </View>
              {/*  Left side content */}
              <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
                <FontAwesome name="remove" size={26} color="#F29FBC" />
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-row space-x-2  w-4/5 items-center">
                <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
                  <Text className="text-[18px] font-bold">T</Text>
                </View>
                <View>
                  <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
                  <Text className="text-[16px] font-light">
                    324 IH-35, 78108, TX
                  </Text>
                </View>
              </View>
              {/*  Left side content */}
              <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
                <FontAwesome name="remove" size={26} color="#F29FBC" />
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-row space-x-2  w-4/5 items-center">
                <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
                  <Text className="text-[18px] font-bold">T</Text>
                </View>
                <View>
                  <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
                  <Text className="text-[16px] font-light">
                    324 IH-35, 78108, TX
                  </Text>
                </View>
              </View>
              {/*  Left side content */}
              <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
                <FontAwesome name="remove" size={26} color="#F29FBC" />
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-row space-x-2  w-4/5 items-center">
                <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
                  <Text className="text-[18px] font-bold">T</Text>
                </View>
                <View>
                  <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
                  <Text className="text-[16px] font-light">
                    324 IH-35, 78108, TX
                  </Text>
                </View>
              </View>
              {/*  Left side content */}
              <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
                <FontAwesome name="remove" size={26} color="#F29FBC" />
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-row space-x-2  w-4/5 items-center">
                <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
                  <Text className="text-[18px] font-bold">T</Text>
                </View>
                <View>
                  <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
                  <Text className="text-[16px] font-light">
                    324 IH-35, 78108, TX
                  </Text>
                </View>
              </View>
              {/*  Left side content */}
              <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
                <FontAwesome name="remove" size={26} color="#F29FBC" />
              </View>
            </View>
            <View className="bg-[#FFFFFF] rounded-xl h-[75px] items-center justify-center flex flex-row shadow">
              {/* Right side content of card */}
              <View className="flex flex-row space-x-2  w-4/5 items-center">
                <View className=" w-[50px] h-[50px] rounded-xl items-center justify-center">
                  <Text className="text-[18px] font-bold">T</Text>
                </View>
                <View>
                  <Text className="text-[18px] font-bold">Torchy's Tacos</Text>
                  <Text className="text-[16px] font-light">
                    324 IH-35, 78108, TX
                  </Text>
                </View>
              </View>
              {/*  Left side content */}
              <View className="flex flex-row items-center space-x-2 w-[44px] h-[44px] justify-center">
                <FontAwesome name="remove" size={26} color="#F29FBC" />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
