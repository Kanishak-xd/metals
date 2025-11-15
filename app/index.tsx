import { ScrollView, View } from "react-native";
import MetalTile from "../components/MetalTile";

const metals = ["gold", "silver", "platinum", "palladium"];

export default function Index() {
  return (
    <View className="flex-1 bg-gray-50 dark:bg-neutral-900">
      <ScrollView className="flex-1 px-4 pt-4">
        {metals.map((metal) => (
          <MetalTile key={metal} metal={metal} />
        ))}
      </ScrollView>
    </View>
  );
}
