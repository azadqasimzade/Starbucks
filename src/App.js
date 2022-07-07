import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Holiday from "./Components/Holiday/Holiday";
import Hooray from "./Components/Hooray/Hooray";
import Refresh from "./Components/Refresh/Refresh";
import Summer from "./Components/Summer/Summer";
import Text from "./Components/Text/Text";
import Uber from "./Components/Uber/Uber";

function App() {
  return (
    <>
      <div className="flex flex-col gap-y-8">
        <Header/>
        <Summer/>
        <Holiday/>
        <Refresh/>
        <Hooray/>
        <Uber/>
        <Text/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
