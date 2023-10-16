import { useState } from "react";
import { View, StatusBar } from "react-native";
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");

  // Arrow Function inside Functional Component
  const changePage = (pageName) => {
    // Change state value
    setPage(pageName);
  };

  return (
    <View>
      <StatusBar style="light" backgroundColor="#AA0002" />
      <Header onListPress={() => changePage("list")} onArticlePress={() => changePage("article")} />
      <Separator height={30} />
      {page === "list" ? <List /> : page === "article" ? <Article /> : null}
    </View>
  );
};

export default App;
