import "./CreateIndicator.scss";
import IndicatorForm from "../../components/IndicatorForm/IndicatorForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CreateIndicator() {
  const navigation = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigation("/login");
    }
  }, [navigation]);

  return (
    <main className="create-indicator-main">
      <h1 className="create-indicator-main__headline">Create Indicator</h1>
      <IndicatorForm mode="create" />
    </main>
  );
}

export default CreateIndicator;
