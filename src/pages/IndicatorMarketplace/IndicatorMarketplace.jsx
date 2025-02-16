import "./IndicatorMarketplace.scss";
import IndicatorItem from "../../components/IndicatorItem/IndicatorItem";
function IndicatorMarketplace() {
  const [indicators, setIndicators] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const fetchIndicators = async () => {
      try {
        const res = await axios.get(`${baseUrl}/indicators`);

        setIndicators(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIndicators();
  }, [indicators]);

  if (!indicators) {
    return <div>Loading...</div>;
  }
  return (
    <main className="marketplace-main">
      <section className="indicator__list">
        <h1 className="indicator__list__headline">Indicator Marketplace</h1>

        <div className="indicator__list__filters">
          <h4>
            USER <img src={sort_icon} />
          </h4>
          <h4>
            NAME <img src={sort_icon} />
          </h4>
          <h4>
            TYPE <img src={sort_icon} />
          </h4>
          <h4>
            LANGUAGE <img src={sort_icon} />
          </h4>
          <h4>
            LICENSE <img src={sort_icon} />
          </h4>
          <h4>
            DATE PUBLISHED/UPDATED <img src={sort_icon} />
          </h4>
          <h4>RATING</h4>
        </div>

        {indicators.map((indicator) => (
          <IndicatorItem key={indicator.id} data={indicator} />
        ))}
      </section>
    </main>
  );
}

export default IndicatorMarketplace;
