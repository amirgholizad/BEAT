import "./CreateIndicator.scss";
import IndicatorForm from "../../components/IndicatorForm/IndicatorForm";

function CreateIndicator() {
  return (
    <main className="create-indicator-main">
      <h1 className="create-indicator-main__headline">Create Indicator</h1>
      <IndicatorForm mode="create" />
    </main>
  );
}

export default CreateIndicator;
