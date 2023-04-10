import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import StatisticsItem from './StatisticsItem';


// const Statistics  = ({ title, stats }) => {
//   return <h1 className={css.title}> {title}</h1>;
// };
const Statistics = ({title, data}) => {
  return (
    <div>
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statisticslist}>
                {data.map(item => {
                    return (
                        <StatisticsItem
                        key = {item.id}
                        label = {item.label}
                        percentage={item.percentage}
                        />
                    );
                })}
            </ul>
        </section>
    </div>
);
};

Statistics.propTypes = {
text: PropTypes.string,
data: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
}).isRequired
),
};
export default Statistics;