import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { fetchMetalDetails } from "../../services/prices";

export default function MetalDetails() {
  const { metal } = useLocalSearchParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchMetalDetails(String(metal));
        setData(result);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [metal]);

  return (
    <View className="flex-1 bg-white dark:bg-black">
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView className="flex-1 p-6">
          <Text className="text-3xl font-bold capitalize mb-6 text-black dark:text-white">
            {metal} Details
          </Text>

          <View className="flex flex-colspace-y-4 gap-2">
            <View className="bg-gray-50 dark:bg-neutral-900 p-4 rounded-lg">
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Current Price
              </Text>
              <Text className="text-2xl font-bold text-black dark:text-white">
                {data?.price != null && data?.price !== undefined
                  ? `₹${data.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : "null"}
              </Text>
            </View>

            <View className="bg-gray-50 dark:bg-neutral-900 p-4 rounded-lg">
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Open Price
              </Text>
              <Text className="text-xl font-semibold text-black dark:text-white">
                {data?.open_price != null && data?.open_price !== undefined
                  ? `₹${data.open_price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : "null"}
              </Text>
            </View>

            <View className="bg-gray-50 dark:bg-neutral-900 p-4 rounded-lg">
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Previous Close Price
              </Text>
              <Text className="text-xl font-semibold text-black dark:text-white">
                {data?.prev_close_price != null && data?.prev_close_price !== undefined
                  ? `₹${data.prev_close_price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : "null"}
              </Text>
            </View>

            <View className="bg-gray-50 dark:bg-neutral-900 p-4 rounded-lg">
              <Text className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Last Updated
              </Text>
              <Text className="text-base text-black dark:text-white">
                {data?.timestamp != null && data?.timestamp !== undefined
                  ? new Date(data.timestamp * 1000).toLocaleString()
                  : "null"}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

